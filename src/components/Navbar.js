import { useState } from "react";
import {
    AppBar,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    SwipeableDrawer,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

// CSS
import "./Navbar.css";

// Icons
import Brightness4Icon from "@mui/icons-material/Brightness4";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar({
    data,
    portfolioName,
    theme,
    setTheme,
    darkMode,
    lightMode,
}) {
    const [toggleDrawer, setToggleDrawer] = useState(false);

    const handleDrawer = () => {
        setToggleDrawer((value) => !value);
    };

    const themeChange = () => {
        setTheme((prevMode) => (prevMode === lightMode ? darkMode : lightMode));
    };

    return (
        <>
            <AppBar
                className="navbar"
                sx={{
                    backgroundColor: 'primary.contrast',
                    flexDirection: "row",
                }}
            >
                <>
                    {theme === lightMode ? (
                        <Brightness4Icon
                            sx={{ color: 'primary.main' }}
                            onClick={themeChange}
                        />
                    ) : (
                        <WbSunnyIcon
                            sx={{ color: 'primary.main' }}
                            onClick={themeChange}
                        />
                    )}
                </>
                <Link
                    to={"/"}
                    className="no-underline"
                >
                    <Typography
                        sx={{ color: 'primary.main' }}
                        variant="mainNavText"
                        component="h1"
                    >
                        {portfolioName}
                    </Typography>
                </Link>
                <MenuIcon
                    sx={{ color: 'primary.main' }}
                    onClick={handleDrawer}
                    className="menu-icon"
                />
                <SwipeableDrawer
                    anchor="right"
                    open={toggleDrawer}
                    onClose={handleDrawer}
                    onOpen={handleDrawer}
                >
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={handleDrawer}
                    >
                        <>
                            <List>
                                <Link
                                    to={"/"}
                                    className="no-underline"
                                >
                                    <ListItem>
                                        <Typography
                                            sx={{
                                                color: theme.palette.primary.main,
                                            }}
                                            variant="linkNavText"
                                            component="h3"
                                        >
                                            {portfolioName}
                                        </Typography>
                                    </ListItem>
                                </Link>
                            </List>
                            {data.map((item, index) => {
                                return (
                                    <List
                                        sx={{ padding: "0px" }}
                                        key={index}
                                    >
                                        <Link
                                            to={item.path}
                                            className="no-underline"
                                        >
                                            <ListItem
                                                divider
                                                disablePadding
                                            >
                                                <ListItemButton>
                                                    <Typography
                                                        variant="linkNavText"
                                                        component="h4"
                                                    >
                                                        <ListItemText
                                                            sx={{
                                                                color: theme.palette.primary.main,
                                                            }}
                                                            primary={item.title}
                                                            secondary={
                                                                item.projectId
                                                            }
                                                        />
                                                    </Typography>
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>
                                    </List>
                                );
                            })}
                        </>
                    </Box>
                </SwipeableDrawer>
            </AppBar>
        </>
    );
}
