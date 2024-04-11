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
import styles from "./page.module.css";
import { Kaisei_Tokumin } from 'next/font/google';

const kaisei_tokumin = Kaisei_Tokumin({
  weight: '400',
  subsets: ['latin'],
});

const projects = ProjectData.sections.projects.projects;


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 300) {
        let element = document.querySelector("#about-header");
        element.style.opacity = 1;
        element.style.transition = 'opacity 1s';
        element.style.marginBottom = '15px';
      }
      if (window.scrollY > 400) {
        let element = document.querySelector("#about-1");
        element.style.opacity = 1;
        element.style.transition = 'opacity 1s';
        element.style.marginBottom = '15px';
      }
      if (window.scrollY > 500) {
        let element = document.querySelector("#about-2");
        element.style.opacity = 1;
        element.style.transition = 'opacity 1s';
        element.style.marginBottom = '15px';
      }
      if (window.scrollY > 600) {
        let element = document.querySelector("#about-3");
        element.style.opacity = 1;
        element.style.transition = 'opacity 1s';
        element.style.marginBottom = '15px';
      }
      if (window.scrollY > 1200) {
        let element = document.querySelector("#work-1");
        element.style.opacity = 1;
        element.style.transition = 'opacity 1s';
        element.style.marginBottom = '15px';
      }
      if (window.scrollY > 1300) {
        let element = document.querySelector("#work-2");
        element.style.opacity = 1;
        element.style.transition = 'opacity 1s';
        element.style.marginBottom = '15px';
      }
      if (window.scrollY > 1500) {
        let element = document.querySelector("#work-3");
        element.style.opacity = 1;
        element.style.transition = 'opacity 1s';
        element.style.marginBottom = '15px';
      }
      if (window.scrollY > 2000) {
        let element = document.querySelector("#work-4");
        element.style.opacity = 1;
        element.style.transition = 'opacity 1s';
        element.style.marginBottom = '15px';
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

        <Box sx={{ display: 'flex', flexDirection: 'column', width: '75vw', color: 'white', margin: '50px', padding: '50px' }}>  
          <ResumeBanner />
          <HomeSection /> 
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection handleClick={handleClick} />
          <ContactForm />
        </Box>
        
      {isOpen && <ProjectModal project={projects[projectIndex]} closeModal={closeModal} />}
      </Box>

    </main>
  );
}

