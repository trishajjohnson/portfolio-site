import DownloadIcon from '@mui/icons-material/Download';
import { Button } from "@mui/material";


export default function ResumeButton() {

    function handleDownload() {
        const aTag = document.createElement("a");
        aTag.href = "https://www.dropbox.com/scl/fi/bwfeubvl73i75kgaawzn7/Trisha-Johnson_Resume.pdf?rlkey=qx0xpc6x6x4g9vg7k4n55i2zt&dl=0";
        aTag.setAttribute("download", "Trisha Johnson_Resume.pdf");
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    
    return (
        <Button 
            onClick={handleDownload} 
            sx={{
                    color: 'white', 
                    border: '1px solid rgba(255, 255, 255, .7)', 
                    margin: '20px 50px', 
                    '&:hover': {
                        border: '1px solid white'
                    }
                }} 
            variant="outlined"
        >
            <DownloadIcon 
                sx={{
                    marginRight: '10px'
                }} 
            />
                Resume
        </Button>
    );
}