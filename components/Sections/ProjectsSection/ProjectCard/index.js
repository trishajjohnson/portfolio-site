import HoverVideoPlayer from 'react-hover-video-player';
import { Box } from '@mui/material';
import styles from "./ProjectCard.module.css";


function ProjectCard({ project }) {
    
    return (
        <Box className={styles.card}>

            <HoverVideoPlayer
                loop={true}
                playbackRangeEnd={3.0}
                restartOnPaused
                videoStyle={{
                    height: '200px',
                    width: '375px'
                }}
                videoSrc={project.video}
                pausedOverlay={
                    <img
                        src={project.imageUrl}
                        alt={project.name}
                        style={{
                            // Make the image expand to cover the video's dimensions
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                }
            />
        </Box>
    );
}


export default ProjectCard;