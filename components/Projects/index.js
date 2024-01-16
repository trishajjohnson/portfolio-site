"use client";

import { Box } from "@mui/material";
import { ProjectData } from "./ProjectData";
import { Container, Wrapper } from "../StyledMuiComponents/styles";
import ProjectContent from "./ProjectContent";


function Projects() {
    
    return (
        <Container>
            {ProjectData.map((item) => (
                
                <Wrapper key={item.id}>
                    <ProjectContent project={item} />
                </Wrapper>                
               
            ))}
        </Container>
    );
}


export default Projects;