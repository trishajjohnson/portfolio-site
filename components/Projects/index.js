"use client";

import { Container, Wrapper } from "../StyledMuiComponents/styles";
import ProjectContent from "./ProjectContent";
import ProjectModal from "./ProjectModal";
import { useState } from "react";


function Projects({handleClick, projects}) {

    return (
        <Container>
            {projects.map((item, idx) => (
                
                <Wrapper id={idx} onClick={() => handleClick(idx)} key={idx}>
                    <ProjectContent project={item} />
                </Wrapper>                
               
            ))}
        </Container>
    );
}


export default Projects;