import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  components: {
    MuiListItemButton: {    
        variants: [
            {
                props: { variant: "primary" },
                style: {
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(255, 255, 255, .15)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, .15)'
                        }
                    }
                }
            }
        ]        
    },
    MuiButton: {
        variants: [
            {
                props: { variant: "outlined" },
                style: {
                    color: 'white', 
                    border: '.5px solid rgba(255, 255, 255, .7)',
                    '&:hover': {
                        border: '1px solid white'
                    }
                }
            }
        ]
    }
  },
});
