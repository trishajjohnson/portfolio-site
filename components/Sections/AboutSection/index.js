"use client";

import { Box } from '@mui/material';
import { ProjectData } from "../ProjectsSection/ProjectData";
import styles from "./AboutSection.module.css";


export default function AboutSection() {
    const about = ProjectData.sections.about;
    
    
    return (
        <Box id={about.id} className={`section ${styles.aboutContainer}`}>
            
            <h1 id="about-header" className={styles.header}>{about.header}</h1>
            {about.description.map((p, i) => (
                <p id={`about-${i+1}`} key={i} className={styles.description}>{p}</p>
            ))}
            
        </Box>
    );
}