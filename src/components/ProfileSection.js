import { Box, Link } from '@mui/material';

// CSS Files
import './ProfileSection.css'
import styled from 'styled-components';

// Images
import profilePicture from '../images/profile-picture.jpg';

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ProfileImage = styled.img`
    border: 7px solid ${props => props.bColor};
`;

export default function ProfileSection({name, theme}){
    return(
        <section>
            <Box className='banner'>
                <ProfileImage className='profile' src={profilePicture} alt={name + "'s Profile"} bColor={theme.palette.primary.contrast} />
            </Box>
            <Box sx={{display: 'flex', gap: '1.5rem', height: 'auto', justifyContent: 'center'}}>
                <Link href='https://github.com/luisv7' target='_blank'>
                    <GitHubIcon sx={{ color: 'primary.main', fontSize: 'socialIcons.fontSize' }} />
                </Link>
                <Link href='https://www.linkedin.com/in/luis-villarreal7/' target='_blank'>
                    <LinkedInIcon sx={{ color: 'primary.main', fontSize: 'socialIcons.fontSize' }} />
                </Link>
            </Box>
        </section>
    )
}