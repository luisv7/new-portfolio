import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import data from './pages/project-data';
import './App.css';
import Footer from './components/Footer';
import LyricsFinder from './pages/LyricsFinder';

const lightMode = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000',
      contrast: '#fff',
      light: '#a5a6aa'
    },
    secondary: {
      main: '#343a40',
      contrast: '#fff',
      light: '#a5a6aa'
    }
  },
  typography: {
    mainNavText: {
      fontSize: '1.3rem',
    },
    linkNavText: {
      fontSize: '1.1rem',
    },
    bannerText: {
      fontSize: '4rem',
    },
    socialIcons:{
      fontSize: '2.4rem'
    },
    projectBtn: {
      fontSize: '0.7rem',
    }
  },
  
});

const darkMode = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
      contrast: '#000',
      light: '#a5a6aa'
    },
    secondary: {
      main: '#343a40',
      contrast: '#000',
      light: '#ced4da'
    }
  },
  typography: {
    mainNavText: {
      fontSize: '1.3rem',
    },
    linkNavText: {
      fontSize: '1.1rem',
    },
    bannerText: {
      fontSize: '4rem',
    },
    socialIcons:{
      fontSize: '2.4rem'
    },
    projectBtn: {
      fontSize: '0.8rem'
    }
  }
});

function App() {
  const [theme, setTheme] = useState(lightMode)
  const portfolioName = 'Portfolio';
  const name = 'Luis Villarreal';

  useEffect(() => {
    setTheme(lightMode)
  }, [setTheme])

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <BrowserRouter>
        <Navbar 
          portfolioName={portfolioName} 
          theme={theme}
          setTheme={setTheme}
          darkMode={darkMode} 
          lightMode={lightMode}
          data={data}
        />
        <Routes>
          <Route 
            path='/' 
            element={<Home theme={theme} data={data} name={name}/>} />
          <Route 
            path='/lyrics-finder' 
            element={<LyricsFinder theme={theme} data={data} name={name}/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
