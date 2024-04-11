"use client";

import ProjectCard from "./ProjectCard";
import { Box } from "@mui/material";
import { ProjectData } from "./ProjectData";

const projects = ProjectData.sections.projects;


export default function ProjectsSection({ handleClick }) {

    return (
        <Box 
            id={projects.id}
            className="section"
            sx={{ 
                alignContent: 'flex-end', 
                alignItems: 'flex-start', 
                borderRadius: '10px',
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '25px',
                justifyContent: 'center',
                marginBottom: 25,
                zIndex: 1 
            }}
        >
            {projects.projects.map((item, idx) => (
                <Box key={idx} onClick={() => handleClick(idx)}>
                    <ProjectCard project={item} />
                </Box> 
            ))}
        </Box>
    );
}