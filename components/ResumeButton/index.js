import DownloadIcon from '@mui/icons-material/Download';
import { Button } from "@mui/material";


export default function ResumeButton() {

    function handleDownload() {
        const aTag = document.createElement("a");
        aTag.href = "https://www.dropbox.com/scl/fi/bwfeubvl73i75kgaawzn7/Trisha-Johnson_Resume.pdf?rlkey=qx0xpc6x6x4g9vg7k4n55i2zt&dl=1";
        aTag.setAttribute("download", "Trisha Johnson_Resume.pdf");
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    
    return (
    
        <Button 
            color="primary"
            onClick={handleDownload} 
            variant="outlined"
            startIcon={<DownloadIcon />}
        >
            Resume
        </Button>
      
    );
}