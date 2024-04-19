import React from 'react';
import ReactPlayer from 'react-player';
import { Box, Link } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import styles from "./ProjectModal.module.css";


function ProjectModal({ project, closeModal }) {

    return (
        // Modal container
        <Box className={styles.modalBackDrop}>
            <Box className={styles.closeIconContainer}>
                <CloseIcon onClick={closeModal} className={styles.closeIcon} />
            </Box>

            {/* Modal */}
            <Box className={styles.outerModalContainer}>
                
                <Box className={styles.innerModalContainer}>
                    <ReactPlayer 
                        url={project.video} 
                        controls={true}
                        volume={0}
                        height={350}
                        className={styles.player}
                    />
                    <Box className={styles.projectContent}>
                        <h1 className={styles.header}>{project.name}</h1>
                        <p className={styles.description}>{ project.description }</p>
                        
                        <h3 className={styles.subHeader}>Technologies</h3>
                        <p className={styles.technologies}>{ project.technologies.join(', ') } </p>
                        {project.github && <p>Click <Link href={project.github} target="_blank">here</Link> for source code.</p>} 
                        <p>Click <Link target="_blank" href={project.url}>here</Link> to see the live site.</p>

                    </Box>
                </Box>
            </Box>
        </Box>
    )

}

export default ProjectModal;