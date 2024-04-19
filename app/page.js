"use client";

// React/Next imports
import { useState, useEffect } from "react";
import clsx from 'clsx';

// React component imports
import Navbar from "../components/Navbar";
import ResumeButton from "../components/ResumeButton";
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
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

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
  const [scrolledPosition, setScrolledPosition] = useState(0);
  const [scrollY, setScrollY] = useState(scrolledPosition);

  useEffect(() => {
    const handleScroll = () => {
      const yCoords = [500, 800, 1300, 1400, 3000];

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

  useEffect(() => {
    if(!isOpen) {
      window.scrollTo(0, scrolledPosition);
    }
  }, [isOpen]);

  function handleClick(idx) {
    setProjectIndex(idx);
    setScrolledPosition(window.scrollY);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main id="main" className={clsx([kaisei_tokumin.className, styles.mainContainer, isOpen && styles.open])} style={{ top: scrolledPosition*-1 }}>
        <Box className={styles.buttonContainer}>
          <ResumeButton />
        </Box>
        <Box id="page-box" className={styles.pageBox}>
          <Box className={styles.navBarContainer}>
            <Navbar />
          </Box>

          <Box className={styles.content}>  
            <HomeSection /> 
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection handleClick={handleClick} />
            <ContactForm />
          </Box>
          
        </Box>
        {isOpen && <ProjectModal project={projects[projectIndex]} closeModal={closeModal} />}

      </main>
    </ThemeProvider>
  );
}

