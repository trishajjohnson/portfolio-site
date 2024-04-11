import { Box } from "@mui/material";
import ResumeButton from "./ResumeButton";

export default function ResumeBanner() {

    return (

        <Box sx={{
            backgroundColor: 'black',
            width: '100vw',
            position: 'fixed',
            textAlign: 'right',
            top: 0,
            right: 0,
            zIndex: 2
          }}>
            <ResumeButton />
        </Box>
        
    );
}