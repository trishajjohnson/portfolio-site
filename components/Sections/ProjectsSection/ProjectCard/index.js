import HoverVideoPlayer from 'react-hover-video-player';
import { Box } from '@mui/material';

function ProjectCard({ project }) {
    
    return (
        <Box sx={{
            display: 'flex',
            position: 'relative',
            border: '3px solid rgba(249, 249, 249, 0.1)',
            backgroundColor: 'rgba(249, 249, 249, 0.1)',
            borderRadius: '10px',
            cursor: 'pointer',
            boxShadow: 'rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px',
            transition: 'all 250ms cubic-bezier(0, 25, 0.46, 0.45, 0.94) 0s',
            '&:hover': {
                transform: 'scale(1.05)',
                borderColor: 'rgba(249, 249, 249, 0.8)',
                boxShadow: 'rgb(0 0 0 / 80%) 0 40px 58px -16px'
            }
        }}>

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