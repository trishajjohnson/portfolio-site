"use client";

import ProjectCard from "./ProjectCard";
import { Box } from "@mui/material";
import { ProjectData } from "./ProjectData";
import styles from "./ProjectsSection.module.css";


export default function ProjectsSection({ handleClick }) {
    const projects = ProjectData.sections.projects;


    return (
        <Box id={projects.id} className={`section ${styles.projectsContainer}`}>
            {projects.projects.map((item, idx) => (
                <Box key={idx} onClick={() => handleClick(idx)}>
                    <ProjectCard project={item} />
                </Box> 
            ))}
        </Box>
    );
}