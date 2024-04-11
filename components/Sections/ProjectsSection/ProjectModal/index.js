import React from 'react';
import ReactPlayer from 'react-player';
import { Box, Link } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function ProjectModal({ project, closeModal }) {

    return (
        // Modal container
        <Box sx={{
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100vw',
            height: '100vh',
            zIndex: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            color: "white"
            }}          
        >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', margin: "75px 75px 0 0" }}>
                <CloseIcon onClick={closeModal} sx={{ color: 'white', fontSize: '35px', " &:hover": { cursor: "pointer" } }} />
            </Box>

            {/* Modal */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    height: '95vh',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'black',
                    padding: '20px',
                    border: '1px solid rgba(148, 142, 142, 0.2)'
                }}
            >
                
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <ReactPlayer 
                        url={project.video} 
                        controls={true}
                        volume={0}
                        height={350}
                        style={{ marginBottom: '50px' }}
                    />
                    <Box sx={{ overflowY:'scroll', height: 500,  display: 'flex', flexDirection: "column", alignItems: 'center', textAlign: 'center' }}>
                        <h1 style={{ fontSize: "30px", marginBottom: "10px" }}>{project.name}</h1>
                        <p style={{ marginBottom: "20px" }}>{ project.description }</p>
                        
                        <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>Technologies</h3>
                        <p className='modal' style={{ marginBottom: '10px' }}>{ project.technologies.join(', ') } </p>
                        <p>Click <Link>here</Link> for source code and <Link>here</Link> to see the live site.</p>

                    </Box>
                </Box>
            </Box>
        </Box>
    )

}

export default ProjectModal;