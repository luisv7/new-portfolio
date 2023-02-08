import { Link } from "react-router-dom";
import { Paper, Typography, Box, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ProfileSection from "../components/ProfileSection";

// CSS
import { motion } from "framer-motion";
import "./Home.css";

// Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";

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

export default function Home({ data, theme, name }) {
    return (
        <>
            <main>
                <ProfileSection name={name} theme={theme} />
                <Box sx={{ padding: "1rem" }}>
                    <Grid2 container spacing={2}>
                        <Grid2 xs={12} md={4} lg={4}>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    <Typography variant="h4" component="h1">
                                        Luis Villarreal
                                    </Typography>
                                    <Typography variant="body2" component="h2" sx={{ color: 'primary.light', fontWeight: "600" }}>
                                        Software Engineer | Full Stack Web Developer
                                    </Typography>
                                    <Box sx={{ display: "flex", gap: "0.5rem" }}>
                                        <LocationOnIcon />
                                        <Typography sx={{ fontWeight: "600", color: 'primary.main' }} variant="body1" component="p">
                                            Los Angeles, CA
                                        </Typography>
                                    </Box>
                                </Box>
                            <Box sx={{ marginTop: "1rem" }}>
                                <motion.div
                                    variants={fadeAnimationVariants}
                                    initial='hidden'
                                    whileInView='visible'
                                >
                                    <Paper elevation={3} sx={{ padding: "1rem" }}>
                                        <Typography sx={{ fontWeight: "600" }} component="h3" variant="h5">
                                            About Me
                                        </Typography>
                                        <Typography variant="body1" component="p">
                                            As a tech enthusiast, I am always seeking out new and exciting ways to use my skills and knowledge to solve
                                            problems. I have extensive experience in building eCommerce websites delivering exceptional customer experiences. In
                                            my free time, I enjoy staying up-to-date on the latest technologies, particularly in computer science, iOS
                                            development, and graphic design. I am also passionate about helping others and sharing my knowledge and skills with
                                            those around me.
                                        </Typography>
                                    </Paper>
                                </motion.div>
                            </Box>
                        </Grid2>
                        <Grid2 xs={12} md={8} lg={8}>
                            <Box>
                                <Typography variant="h4" component="h2">
                                    Projects
                                </Typography>
                                {data.map((item, index) => {
                                    return (
                                        <motion.div variants={fadeAnimationVariants} initial="hidden" whileInView="visible" key={index}>
                                            <Card sx={{ marginTop: "1rem" }}>
                                                <Link to={item.path}>
                                                    <CardMedia
                                                        sx={{
                                                            height: "140px",
                                                            backgroundPosition: "top",
                                                        }}
                                                        image={item.imgURL}
                                                        title={item.title}
                                                    />
                                                </Link>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {item.title}
                                                    </Typography>
                                                    <Typography
                                                        className="line-clamp"
                                                        variant="body2"
                                                        color="text.secondary"
                                                        sx={{
                                                            maxWidth: "100ch",
                                                            whiteSpace: "wrap",
                                                            overflow: "hidden",
                                                            textOverflow: "ellipsis",
                                                        }}
                                                    >
                                                        {item.description}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button variant="contained" size="small" endIcon={<GitHubIcon />} href={item.gitHubURL} target="_blank">
                                                        <Typography fontSize={theme.typography.projectBtn}>GitHub</Typography>
                                                    </Button>
                                                    <Button variant='contained' sx={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrast }} size="small" href={item.launchAppURL} target="_blank">
                                                        <Typography fontSize={theme.typography.projectBtn}>Launch App</Typography>
                                                    </Button>
                                                    <Link to={item.path} className="no-underline">
                                                        <Button size="small" variant="outlined">
                                                            <Typography fontSize={theme.typography.projectBtn}>Learn More</Typography>
                                                        </Button>
                                                    </Link>
                                                </CardActions>
                                            </Card>
                                        </motion.div>
                                    );
                                })}
                            </Box>
                        </Grid2>
                    </Grid2>
                </Box>
            </main>
        </>
    );
}
