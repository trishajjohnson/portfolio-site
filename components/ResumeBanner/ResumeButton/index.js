import DownloadIcon from '@mui/icons-material/Download';
import { Button } from "@mui/material";


export default function ResumeButton() {

    function handleDownload() {
        const aTag = document.createElement("a");
        aTag.href = "https://github.com/trishajjohnson/portfolio-site/blob/main/public/Trisha%20Johnson_WORD_FINAL%20copy.pdf";
        aTag.setAttribute("download", "Trisha Johnson_WORD_FINAL copy.pdf");
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