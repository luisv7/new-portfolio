import {Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import codeImage from "../images/screen-with-code.jpg";
import graphicDesign from "../images/graphic-design.jpg";
import './ServicesSection.css';

export default function WebDevelopmentSection({theme}){
    return (
        <section>
            <Typography variant="h4" component="h2" className="title-section">
                Services
            </Typography>
            <Grid2 container spacing={2} className="container-dev" sx={{backgroundColor: theme.palette.primary.superLight}}>
                <Grid2 xs={12} sm={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
                    <img className="img-6" src={codeImage} alt="computer screen with code" />
                </Grid2>
                <Grid2 className="text-6" xs={12} md={6}>
                    <Typography variant="h4" component="h3">
                        💭 Let's Create an Impressive Digital Presence Together!
                    </Typography>
                    <Typography variant="body1" component="p">
                        I offer comprehensive website development services to help businesses establish an effective online presence. I work closely with
                        clients to understand their specific needs and objectives, and develop custom solutions tailored to their requirements. I create
                        visually appealing and functional websites that attract and engage customers.
                    </Typography>
                </Grid2>
            </Grid2>
            <Grid2 container spacing={2} className='container-design'>
                <Grid2 className="text-6" xs={12} md={6}>
                    <Typography variant="h4" component="h3">
                        🎨 Transform Your Online Presence
                    </Typography>
                    <Typography variant="body1" component="p">
                        I work closely with clients to understand their brand, target audience, and business goals, and develop a design that reflects their
                        values and personality. My web design services include creating a responsive design that is mobile-friendly and optimized for search
                        engines. I use the latest tools and techniques to create a seamless user experience that engages visitors and encourages them to take
                        action. My aim is to help businesses establish a strong online presence and stand out in a competitive marketplace.
                    </Typography>
                </Grid2>
                <Grid2 xs={12} sm={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
                    <img className="img-6" src={graphicDesign} alt="computer screen with graphic design tools" />
                </Grid2>
            </Grid2>
        </section>
    );
}