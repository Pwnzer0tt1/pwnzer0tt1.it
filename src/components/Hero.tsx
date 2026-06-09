import { Box, Typography, Container, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SocialLinks from './SocialLinks';

export default function Hero() {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background circle */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '600px',
          height: '600px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255,152,0,0.1) 0%, rgba(18,18,18,0) 70%)',
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="md" sx={{ zIndex: 1, position: 'relative' }}>
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src="/icon.png"
            alt="Pwnzer0tt1 Logo"
            sx={{
              width: { xs: 200, md: 250 },
              height: { xs: 200, md: 250 },
              mb: 4,
              borderRadius: '50%', // Make the logo circular
              boxShadow: '0 0 30px rgba(255, 152, 0, 0.3)', // Subtle glow around the circle
              border: '4px solid rgba(255, 255, 255, 0.1)', // Nice border
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 0 40px rgba(255, 152, 0, 0.6)',
                borderColor: 'rgba(255, 152, 0, 0.5)',
              }
            }}
          />
          
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 900,
              fontSize: { xs: '3rem', md: '5rem' },
              background: 'linear-gradient(to right, #ff9800 0%, #f44336 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0px 10px 20px rgba(0,0,0,0.5)',
            }}
          >
            Pwnzer0tt1
          </Typography>
          
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ 
              maxWidth: '600px', 
              mx: 'auto', 
              mt: 2, 
              mb: 4,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              lineHeight: 1.6,
              textShadow: '0px 2px 4px rgba(0,0,0,0.8)',
            }}
          >
            Academic CTF team of Poliba
            <br />
            Always ready to hack and eat panzerotti 🚩
          </Typography>

          <SocialLinks sx={{ mt: 4 }} />
        </Box>
      </Container>

      {/* Bouncing Scroll Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0) translateX(-50%)' },
            '40%': { transform: 'translateY(-20px) translateX(-50%)' },
            '60%': { transform: 'translateY(-10px) translateX(-50%)' },
          },
        }}
      >
        <IconButton 
          onClick={handleScrollDown} 
          sx={{ 
            color: 'primary.main',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }
          }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
}
