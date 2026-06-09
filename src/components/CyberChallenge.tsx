import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

export default function CyberChallenge() {
  return (
    <Box sx={{ py: 10, backgroundColor: 'background.default' }} id="cyberchallenge">
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 700 }}>
              CyberChallenge.IT
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
              Pwnzer0tt1 proudly manages the official <strong>CyberChallenge.IT</strong> course at Politecnico di Bari.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 5, lineHeight: 1.8, fontSize: '1.1rem' }}>
              CyberChallenge.IT is the Italian national training program for young cybersecurity talents. As a team, we take the lead in organizing and delivering comprehensive cybersecurity courses at Poliba. We teach university students the fundamental and advanced aspects of offensive security, guiding them through hands-on hacking labs, cryptography, and real-world exploitation techniques to prepare them for national competitions.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<LaunchIcon />}
              href="https://cyberchallenge.it/venues/poliba"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ borderRadius: '30px', px: 4, py: 1.5, fontWeight: 'bold' }}
            >
              Cyberchallenge - Poliba Page
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: 'transparent',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box
                component="img"
                src="/CCIT_Stemma.svg"
                alt="CyberChallenge Logo"
                sx={{
                  width: '100%',
                  maxWidth: '350px',
                  filter: 'drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.15))',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
