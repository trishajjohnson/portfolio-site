import HoverVideoPlayer from 'react-hover-video-player';


function ProjectContent({ project }) {
    
    return (
        <HoverVideoPlayer
            videoSrc={project.video}
            pausedOverlay={
                <img
                    src={project.imageUrl}
                    alt={project.name}
                    style={{
                        // Make the image expand to cover the video's dimensions
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            }
            // loadingOverlay={
            //     <div className="loading-overlay">
            //     <div className="loading-spinner" />
            //     </div>
            // }
        />
    );
}


export default ProjectContent;