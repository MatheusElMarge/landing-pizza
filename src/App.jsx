import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import theme from './themes/theme.jsx';
import Section from './components/Section';
import FaqSection from './components/FaqSection';
import MiddleSection from './components/MIddleSection';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bannerSrc = isMobile ? '/img/Banner_Mobile.png' : '/img/Banner.png';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <img className="banner" src={bannerSrc} alt="Banner" />
      <div className="container">
        <Section />
        <FaqSection />
        <MiddleSection />
        <Contact />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
