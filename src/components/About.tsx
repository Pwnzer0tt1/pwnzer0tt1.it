import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import FlagIcon from '@mui/icons-material/Flag';

const features = [
  {
    icon: <FlagIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />,
    title: 'CTF Competitions',
    description: 'We actively participate in national and international Capture The Flag competitions, constantly challenging ourselves against the best teams.'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40, color: 'secondary.main', mb: 2 }} />,
    title: 'Cybersecurity Enthusiasts',
    description: 'Beyond playing CTFs, we explore deep vulnerabilities, develop custom exploits, and publish writeups to share our passion with the community.'
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />,
    title: 'Open Source Tools',
    description: 'We build and maintain tools to assist in vulnerability discovery, reverse engineering, and general security auditing.'
  }
];

export default function About() {
  return (
    <Box sx={{ py: 10, backgroundColor: 'background.default' }} id="about">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" sx={{ mb: 2, fontWeight: 700 }}>
          Who we are
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 8, maxWidth: 800, mx: 'auto' }}>
          Pwnzer0tt1 is an Academic Capture The Flag (CTF) team of Politecnico di Bari (Poliba).
          We are a group of cybersecurity enthusiasts and passionate students dedicated to offensive security and ethical hacking
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: 'background.paper',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 10px 30px -10px rgba(255, 152, 0, 0.2)',
                    borderColor: 'rgba(255, 152, 0, 0.3)'
                  }
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  {feature.icon}
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
