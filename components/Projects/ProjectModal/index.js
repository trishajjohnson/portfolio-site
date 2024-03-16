import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


function ProjectModal({ project, closeModal }) {
    
    return (
        // Modal container
        <Box sx={{
            // display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'start',
            // alignItems: 'end',
            position: 'fixed',
            left: 0,
            // right: 0,
            top: 0,
            // bottom: 0,
            // padding: 10,
            width: '100%',
            height: '100%',
            zIndex: 99,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            
            }}
            
        >
            {/* Modal */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'black',
                    padding: '20px',
                    // borderRadius: '8px',
                    boxShadow: '-4px 2px 15px rgba(148, 142, 142, 0.2)'
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: "10px 10px 0 0" }}>
                    <CloseIcon onClick={closeModal} sx={{ color: 'white', "&:hover": { cursor: "pointer" } }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <ReactPlayer 
                        url={project.video} 
                        controls={true}
                        volume={0}
                        height={500}
                    />
                    <Box sx={{ overflowY:'auto', height: 150, width: '50%', display: 'flex', flexDirection: "column", alignItems: 'center', textAlign: 'center' }}>
                        <h1>{project.name}</h1>
                        <p>{ project.description }</p>
                        
                        <h3>Technologies</h3>
                        <p>{ project.technologies.join(', ') } </p>
                    </Box>
                </Box>
            </Box>
        </Box>
    )

}

export default ProjectModal;