import { Link } from "react-router-dom";
import {Typography, Box, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ProfileSection from "../components/ProfileSection";
import ProfileInfo from '../components/ProfileInfo';

// CSS
import { motion } from "framer-motion";
import "./Home.css";

// Icons
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
                <Grid2 container>
                    <ProfileInfo />
                    <Box sx={{ padding: "1rem" }}>
                        <Grid2 xs={12}>
                            <Typography variant="h4" component="h2" className="title-section">
                                Projects
                            </Typography>
                            <Grid2 container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
                                {data.map((item, index) => {
                                    return (
                                        <Grid2 xs={12} sm={12} md={6} lg={4} xl={3}>
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
                                                        <Box sx={{display: 'flex'}}>
                                                            <img className="logo" src={item.logo} alt='logo'/>
                                                            <Typography gutterBottom variant="h5" component="div">
                                                                {item.title}
                                                            </Typography>
                                                        </Box>
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
                                                        {
                                                            item.gitHubURL === '#' ? 
                                                            '' :
                                                            <Button variant="contained" size="small" endIcon={<GitHubIcon />} href={item.gitHubURL} target="_blank">
                                                                <Typography fontSize={theme.typography.projectBtn}>GitHub</Typography>
                                                            </Button>
                                                        }
                                                        <Button
                                                            variant="contained"
                                                            sx={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrast }}
                                                            size="small"
                                                            href={item.launchAppURL}
                                                            target="_blank"
                                                        >
                                                            {
                                                                item.gitHubURL === '#' ?
                                                                <Typography fontSize={theme.typography.projectBtn}>Launch Website</Typography> :
                                                                <Typography fontSize={theme.typography.projectBtn}>Launch App</Typography>
                                                            }
                                                            
                                                        </Button>
                                                        <Link to={item.path} className="no-underline">
                                                            <Button size="small" variant="outlined">
                                                                <Typography fontSize={theme.typography.projectBtn}>Learn More</Typography>
                                                            </Button>
                                                        </Link>
                                                    </CardActions>
                                                </Card>
                                            </motion.div>
                                        </Grid2>
                                    );
                                })}
                            </Grid2>
                        </Grid2>
                    </Box>
                </Grid2>
            </main>
        </>
    );
}
