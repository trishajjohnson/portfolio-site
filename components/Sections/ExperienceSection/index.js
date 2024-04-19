"use client";

import { Box } from '@mui/material';
import { ProjectData } from "../ProjectsSection/ProjectData";
import styles from "./ExperienceSection.module.css";

export default function ExperienceSection() {
    const experience = ProjectData.sections.experience;
    
    
    return (
        <Box id={experience.id} className={`section ${styles.experienceContainer}`}>
            {experience.jobs.map((job, i) => (

                <Box key={i} id={job.id} className={styles.contentContainer}>
                    <Box className={styles.content}>
                        <img alt={job.image.alt} src={job.image.path} width="50" height="50" className={styles.companyLogo} />
                        <Box className={styles.title}>
                            <h2>{job.title}</h2>
                            <h4>{job.company}</h4>
                        </Box>
                    </Box>
                    
                    <p className={styles.description}>{job.description}</p>
                    <ul className={styles.list}>
                        {job.metrics.map((m, i) => (
                            <li key={i}>
                                {m}
                            </li>
                        ))}
                    </ul>
                </Box>
            ))}
        </Box>
    )
}