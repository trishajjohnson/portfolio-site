"use client";

import React, { useState, useEffect } from "react";
import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function Navbar() {
    const [currentTab, setCurrentTab] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('.section');
    
          sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
              setCurrentTab(section.getAttribute('id'));
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    function handleClick(evt) {
        evt.preventDefault();
        setCurrentTab(evt.target.innerText);
        window.scrollTo({
            top: document.querySelector(`#${evt.target.innerText}`).offsetTop-100,
            behavior: "smooth",
         });
    }



    return (
            
        <Box sx={{  position: "fixed", display: 'flex', flexDirection: 'column', alignItems: "end", height: '100vh', width: "25vw", backgroundColor: 'black', color: 'white' }}>
            <Box sx={{ margin: 10, alignItems: 'start'}}>
                <h1 style={{ padding: 10, paddingBottom: '25px', fontSize: '75px'}}>T</h1>
                <List sx={{ padding: 0}}>
                    {['home', 'about', 'experience', 'projects', 'contact'].map((text, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton to={`#${text}`} sx={{ borderRadius: '2px', borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', "&.Mui-selected": { backgroundColor: "rgba(255, 255, 255, .15)" } }} onClick={handleClick} selected={currentTab === text ? true : false} >
                                <ListItemText primary={text} sx={{ padding: '2px' }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
}
