
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)({
    alignItems: 'flex-start',
    alignContent: 'flex-end',
    flexWrap: 'wrap',
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    // padding: '30px 0 26px',
    // gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '25px',
    borderRadius: '10px',
});

export const Wrapper = styled(Box)({
    display: 'flex',
    // flexGrow: 1,
    border: '3px solid rgba(249, 249, 249, 0.1)',
    backgroundColor: 'rgba(249, 249, 249, 0.1)',
    // 'img': {
    // background: 'linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42)'
    // },
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: 'rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px',
    transition: 'all 250ms cubic-bezier(0, 25, 0.46, 0.45, 0.94) 0s',
    '&:hover': {
        transform: 'scale(1.05)',
        borderColor: 'rgba(249, 249, 249, 0.8)',
        boxShadow: 'rgb(0 0 0 / 80%) 0 40px 58px -16px'
    }
});