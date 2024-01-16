import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import styles from "./page.module.css";

export default function Home() {

  return (

      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '25vw' }}>
          <Navbar />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '75vw', color: 'white' }}>
          <Box id="home" sx={{ height: '100vh' }}>
            <h1>Home</h1>
          </Box>
          <Box id="about" sx={{ height: '100vh' }}>
            <h1>About</h1>
          </Box>
          <Box id="experience" sx={{ height: '100vh' }}>
            <h1>Experience</h1>
          </Box>
          <Box id="projects" sx={{ height: '100vh' }}>
            <h1>Projects</h1>
            <Projects />
          </Box>

        </Box>
      </Box>

  );
}

