"use client";

import { Box } from '@mui/material';
import { ProjectData } from "../ProjectsSection/ProjectData";


export default function AboutSection() {
    const about = ProjectData.sections.about;

    
    return (
        <Box id={about.id} className="section" sx={{ height: '100vh' }}>
            
            <h1 id="about-header" style={{opacity: 0}}>{about.header}</h1>
            {about.description.map((p, i) => (
                <p id={`about-${i+1}`} key={i} style={{fontSize: '14px', opacity: 0}}>{p}</p>
            ))}
            
        </Box>
    );
}