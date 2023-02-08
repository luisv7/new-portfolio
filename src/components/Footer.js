import { Box, Typography } from "@mui/material";
import './Footer.css';

export default function Footer(){
    return(
        <Box className='footer-container' sx={{backgroundColor: 'primary.main', color: 'primary.contrast' }}>
            <Typography component='h4' variant='body1'>&copy; 2022 Luis Villarreal</Typography>
        </Box>
    )
}