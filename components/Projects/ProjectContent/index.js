import HoverVideoPlayer from 'react-hover-video-player';
import { Box } from '@mui/material';

function ProjectContent({ project }) {
    
    return (
        <Box>

            <HoverVideoPlayer
                loop={true}
                playbackRangeEnd={3.0}
                restartOnPaused
                videoStyle={{
                    height: '200px'
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
                // loadingOverlay={
                //     <div className="loading-overlay">
                //     <div className="loading-spinner" />
                //     </div>
                // }
            />
        </Box>
    );
}


export default ProjectContent;