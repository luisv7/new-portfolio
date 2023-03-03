import { Paper, Typography, Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";
import './ProfileInfo.css'

const fadeAnimationVariants={
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        },
    }
}

export default function ProfileSection(){
    return (
        <section className="info">
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                <Grid2 xs={12} md={4} className="user-name-info m-user-name-info">
                    <Typography variant="h4" component="h1" sx={{ fontWeight: "700", fontSize: "2.2rem" }}>
                        Luis Villarreal
                    </Typography>
                    <Typography variant="body1" component="h2" sx={{ color: "primary.light", fontWeight: "700" }}>
                        Software Engineer | Full Stack Web Developer
                    </Typography>
                    <Box sx={{ display: "flex", gap: "0.5rem" }}>
                        <LocationOnIcon />
                        <Typography sx={{ fontWeight: "600", color: "primary.main" }} variant="body1" component="p">
                            Los Angeles, CA
                        </Typography>
                    </Box>
                </Grid2>
                <Grid2 xs={12} md={7}>
                    <Box sx={{ marginBottom: "1rem" }}>
                        <motion.div variants={fadeAnimationVariants} initial="hidden" whileInView="visible">
                            <Paper elevation={3} sx={{ padding: "1rem" }}>
                                <Typography sx={{ fontWeight: "600" }} component="h3" variant="h5">
                                    About Me
                                </Typography>
                                <Typography variant="body1" component="p">
                                    As a tech enthusiast, I am always seeking out new and exciting ways to use my skills and knowledge to solve problems. I have
                                    extensive experience in building eCommerce websites delivering exceptional customer experiences. In my free time, I enjoy
                                    staying up-to-date on the latest technologies, particularly in computer science, iOS development, and graphic design. I am
                                    also passionate about helping others and sharing my knowledge and skills with those around me.
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Box>
                </Grid2>
            </Box>
        </section>
    );
}