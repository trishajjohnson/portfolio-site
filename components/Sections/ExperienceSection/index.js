"use client";

import { Box } from '@mui/material';
import { ProjectData } from "../ProjectsSection/ProjectData";


export default function ExperienceSection() {
    const experience = ProjectData.sections.experience;

    
    return (
        <Box id={experience.id} className="section" sx={{ marginBottom: 25 }}>
            {experience.jobs.map((job, i) => (

                <Box key={i} id={job.id} sx={{ display: 'flex', flexDirection: 'column', marginBottom: 5, opacity: 0 }}>
                    <Box sx={{ display: 'flex' }}>
                        <img alt={job.image.alt} src={job.image.path} width="50" height="50" style={{ borderRadius: "5px", margin: 10, backgroundColor: "white" }} />
                        <Box sx={{ display:  'flex', flexDirection: 'column' }}>
                            <h2>{job.title}</h2>
                            <h4>{job.company}</h4>
                        </Box>
                    </Box>
                    
                    <p style={{ margin: 10 }}>{job.description}</p>
                    <ul style={{ margin: 25 }}>
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