"use client";

import { ProjectData } from "../ProjectsSection/ProjectData";
import { Box } from "@mui/material";
import Link from '@mui/material/Link';


export default function HomeSection() {
    const home = ProjectData.sections.home;


    return (
        <Box id={home.id} className="section" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 25, height: '60vh' }}>       
            <h1 style={{fontSize: 60, fontWeight: '400', letterSpacing: '2px' }}>{home.name}</h1>
            <Box sx={{ display: 'flex', margin: 5 }}>
                <img src={home.image.path} alt={home.image.alt} width="200" height="200" style={{borderRadius: "50%" }}></img>
                <Box sx={{ display: 'flex', margin: '20px', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{fontSize: '16px', fontWeight: "100"}}>
                        {home.description}
                    </p>
                    <Box sx={{ display: 'flex', marginTop: 5, width: '100%' }}>
                        {home.socials.map((el, i) => (
                            <Link key={i} target="_blank" href={el.url} sx={{ color: 'white', marginRight: '10px', opacity: '0.8', "&:hover": { opacity: 1 } }}>
                                {el.icon()}
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}