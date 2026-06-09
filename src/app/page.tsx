'use client';
import { Box } from '@mui/material';
import Hero from '../components/Hero';
import About from '../components/About';
import Team from '../components/Team';
import CyberChallenge from '../components/CyberChallenge';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Hero />
      <About />
      <Team />
      <CyberChallenge />
      <Projects />
      <Footer />
    </Box>
  );
}
