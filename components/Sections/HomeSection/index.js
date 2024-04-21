"use client";

import { ProjectData } from "../ProjectsSection/ProjectData";
import { Box } from "@mui/material";
import Link from '@mui/material/Link';
import styles from "./Home.module.css";

export default function HomeSection() {
    const home = ProjectData.sections.home;

    
    return (
        <Box id={home.id} className={`section ${styles.homeContainer}`}>       
            <h1 className={styles.header}>{home.name}</h1>
            <Box className={styles.outerContainer}>
                <img src={home.image.path} alt={home.image.alt} width="200" height="200" className={styles.image}></img>
                <Box className={styles.headlineContainer}>
                    <p className={styles.headline}>
                        {home.description}
                    </p>
                    <Box className={styles.iconsContainer}>
                        {home.socials.map((el, i) => (
                            <Link key={i} target="_blank" href={el.url} variant="icons">
                                {el.icon()}
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}