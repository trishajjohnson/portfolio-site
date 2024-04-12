"use client";

// React/Next imports
import { useState, useEffect } from "react";

// React component imports
import Navbar from "../components/Navbar";
import ResumeBanner from "../components/ResumeBanner";
import ProjectsSection from "../components/Sections/ProjectsSection";
import ContactForm from "../components/ContactForm";
import ProjectModal from "../components/Sections/ProjectsSection/ProjectModal";
import HomeSection from "../components/Sections/HomeSection";
import AboutSection from "../components/Sections/AboutSection";
import ExperienceSection from "../components/Sections/ExperienceSection";

// Portfolio content
import { ProjectData } from "../components/Sections/ProjectsSection/ProjectData";

// MUI component imports
import { Box } from "@mui/material";

// Style imports
import "./page.module.css";
import { Kaisei_Tokumin } from 'next/font/google';

const kaisei_tokumin = Kaisei_Tokumin({
  weight: '400',
  subsets: ['latin'],
});

const projects = ProjectData.sections.projects.projects;


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const yCoords = [450, 1300, 1500, 3000, 3500];

      for(let i=0; i<yCoords.length; i++) {
        const y = yCoords[i];
       
        if(window.scrollY >= y) {
          setScrollY(y);  
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleClick(idx) {
    setProjectIndex(idx);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    
    <main id="main" className={kaisei_tokumin.className}>
    
      <Box id="page-box" sx={{ display: 'flex', backgroundColor: "black" }}>
        <Box sx={{ display: "flex", width: '25vw', marginBottom: 10}}>
          <Navbar />
        </Box>

        <Box className={`${isOpen && 'unscrollable'}`} sx={{ display: 'flex', flexDirection: 'column', width: '75vw', color: 'white', margin: '50px', padding: '50px' }}>  
          <ResumeBanner />
          <HomeSection /> 
          <AboutSection y={scrollY} />
          <ExperienceSection y={scrollY} />
          <ProjectsSection handleClick={handleClick} />
          <ContactForm />
        </Box>
        
      {isOpen && <ProjectModal project={projects[projectIndex]} closeModal={closeModal} />}
      </Box>

    </main>
  );
}

