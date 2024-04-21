import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  components: {
    MuiListItemButton: {    
        variants: [
            {
                props: { variant: "primary" },
                style: {
                    borderRadius: '2px',
                    borderTopRightRadius: '20px', 
                    borderBottomLeftRadius: '20px', 
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
            },
            {
                props: { variant: "navtab" },
                style: {
                    color: "white"
                }
            }
        ]
    },
    MuiLink: {
        variants: [
            {
                props: { variant: "icons" },
                style: {
                    color: "white",
                    marginRight: '10px', 
                    opacity: 0.8,
                    '&:hover': {
                        opacity: 1
                    }
                }
            }
        ]
    }
  },
});
