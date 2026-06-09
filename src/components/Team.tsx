import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';

const teamMembers = [
  { name: 'Domingo Dirutigliano', role: 'Co-Founder' },
  { name: 'Michele Ruzzi', role: 'Member' },
  { name: 'Oscar Urselli', role: 'Co-Founder' },
  { name: 'Tiziano Albore', role: 'Member' },
  { name: 'Domenico Mazzini', role: 'Member' },
  { name: "Gilberto Dell'Olio", role: 'Member' },
  { name: 'Christian Risi', role: 'Member' },
  { name: 'Nicola Guerrera', role: 'Co-Founder' },
  { name: 'Luis Di Vittorio', role: 'Member' },
  { name: 'Nicola Pace', role: 'Co-Founder' },
  { name: "Pierantonio D'Agostino", role: 'Member' },
  { name: 'Giuseppe Liguori', role: 'Member' }
].sort((a, b) => a.name.localeCompare(b.name));

function stringAvatar(name: string) {
  const parts = name.split(' ');
  const initials = parts.length > 1
    ? `${parts[0][0]}${parts[1][0]}`
    : `${parts[0][0]}`;

  return {
    children: initials.toUpperCase(),
  };
}

export default function Team() {
  return (
    <Box sx={{ py: 10, backgroundColor: 'background.paper' }} id="team">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" sx={{ mb: 2, fontWeight: 700 }}>
          Meet the Team
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 8, maxWidth: 800, mx: 'auto' }}>
          The passionate students and cybersecurity enthusiasts behind Pwnzer0tt1.
        </Typography>

        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          {teamMembers.map((member, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'background.default',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    borderColor: 'primary.main',
                  }
                }}
              >
                <Avatar
                  {...stringAvatar(member.name)}
                  sx={{
                    width: 56,
                    height: 56,
                    mr: 2,
                    bgcolor: 'rgba(255, 152, 0, 0.2)',
                    color: 'primary.main',
                    fontWeight: 'bold',
                    border: '1px solid rgba(255, 152, 0, 0.5)'
                  }}
                />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="primary.main">
                    {member.role}
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
