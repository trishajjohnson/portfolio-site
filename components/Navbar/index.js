"use client";

import React, { useState } from "react";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function Navbar() {
    const [currentTab, setCurrentTab] = useState("home");

    function handleClick(evt) {
        evt.preventDefault();

        setCurrentTab(evt.target.innerText);
        window.scrollTo({
            top: document.querySelector(`#${evt.target.innerText}`).offsetTop,
            behavior: "smooth",
         });
    }


    return (
            <Drawer
                sx={{ backgroundColor: 'black', width: '30%'}}
                variant="permanent"
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <Box sx={{ position: "fixed", display: 'flex', flexDirection: 'column', alignItems: 'end', height: '100vh', backgroundColor: 'black', color: 'white' }}>
                    <Box sx={{ margin: 10, alignItems: 'start'}}>
                        <h1 style={{ padding: 10, paddingBottom: '25px', fontSize: '75px'}}>T</h1>
                        <List sx={{ padding: 0}}>
                            {['home', 'about', 'experience', 'projects'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton to={`#${text}`} sx={{ borderRadius: '5px', "&.Mui-selected": { backgroundColor: "rgba(255, 255, 255, .15)" } }} onClick={handleClick} selected={currentTab === text ? true : false} >
                                        <ListItemText primary={text} sx={{ padding: '2px' }} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Drawer>
    );
}
