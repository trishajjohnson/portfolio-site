"use client";

import React, { useState, useEffect } from "react";
import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import styles from "./Navbar.module.css";


export default function Navbar() {
    const [currentTab, setCurrentTab] = useState("home");
    const tabs = ['home', 'about', 'experience', 'projects', 'contact'];
    
    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('.section');
          sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = section.clientHeight + sectionTop;
            if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
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
            top: document.querySelector(`#${evt.target.innerText}`).offsetTop,
            behavior: "smooth",
         });
    }

    return (
            
        <Box className={styles.navBarContainer}>
            <Box className={styles.navBar}>
                <h1 className={styles.navBarLogo}>T</h1>
                <List className={styles.navBarList}>
                    {tabs.map((text, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton to={`#${text}`} variant="primary" disableRipple onClick={handleClick} selected={currentTab === text}>
                                <ListItemText primary={text} className={styles.navBarListItem} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
}
