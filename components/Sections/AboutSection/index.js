"use client";

import { Box } from '@mui/material';
import { ProjectData } from "../ProjectsSection/ProjectData";
import "./about.css";

export default function AboutSection({ y }) {
    const about = ProjectData.sections.about;

    
    return (
        <Box id={about.id} className={`section ${y >= 450 && y <= 1125 && 'visible'}`} sx={{ height: '100vh', opacity: 0, transition: 'opacity 1s' }}>
            
            <h1 id="about-header">{about.header}</h1>
            {about.description.map((p, i) => (
                <p id={`about-${i+1}`} key={i} style={{fontSize: '14px'}}>{p}</p>
            ))}
            
        </Box>
    );
}