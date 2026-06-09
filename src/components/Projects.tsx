import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    title: 'Firegex',
    description: 'Firegex is a specialized firewall designed specifically for Attack-Defense CTF competitions. It allows teams to effortlessly monitor, filter, and modify incoming network traffic in real-time to defend vulnerable services against opposing teams\' exploits.',
    tags: ['Firewall', 'A/D CTF', 'Security'],
    link: 'https://github.com/Pwnzer0tt1/firegex'
  },
  {
    title: 'Exploitfarm',
    description: 'ExploitFarm is a powerful, automated exploitation framework built for Attack-Defense CTFs. It is designed to continuously launch exploits against rival teams, manage successful attacks, and automatically submit stolen flags to the main scoring server.',
    tags: ['Exploitation', 'A/D CTF', 'Automation'],
    link: 'https://github.com/Pwnzer0tt1/exploitfarm'
  },
  {
    title: 'Digger',
    description: 'Digger provides a sleek, highly responsive web interface for exploring and analyzing Suricata EVE (Extensible Verification Engine) outputs. It simplifies the process of reviewing network intrusion alerts and malicious packet captures during competitions.',
    tags: ['Suricata', 'Web', 'Analysis'],
    link: 'https://github.com/Pwnzer0tt1/digger'
  },
  {
    title: 'LDBARI 2024',
    description: 'The official repository for the Linux Day Bari 2024 Capture The Flag event. It includes all the custom challenges, vulnerable services, infrastructure scripts, and detailed writeups created by our team for the local community.',
    tags: ['CTF', 'Challenges', 'Linux Day'],
    link: 'https://github.com/Pwnzer0tt1/LDBARI-2024'
  },
  {
    title: 'LDBARI 2023',
    description: 'An archive of the custom challenges and infrastructure code from the Linux Day Bari 2023 Capture The Flag event. This repository contains the original vulnerable applications and solutions designed and managed entirely by Pwnzer0tt1.',
    tags: ['CTF', 'Challenges', 'Linux Day'],
    link: 'https://github.com/Pwnzer0tt1/LDBARI-2023'
  },
  {
    title: 'CVE-2022-36946',
    description: 'Our deep-dive technical research and proof of concept for CVE-2022-36946. This repository demonstrates a vulnerability in the Linux kernel\'s netfilter_queue subsystem that can be deliberately triggered to cause a kernel panic (Denial of Service).',
    tags: ['CVE', 'Kernel', 'Vulnerability'],
    link: 'https://github.com/Pwnzer0tt1/CVE-2022-36946'
  }
];

export default function Projects() {
  return (
    <Box sx={{ py: 10, backgroundColor: 'background.paper' }} id="projects">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" sx={{ mb: 2, fontWeight: 700 }}>
          Projects & Repositories
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 8, maxWidth: 800, mx: 'auto' }}>
          Explore our open source tools, automated farms, and CTF challenge archives.
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  backgroundColor: 'background.default',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    borderColor: 'secondary.main'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.tags.map((tag) => (
                      <Chip 
                        key={tag} 
                        label={tag} 
                        size="small" 
                        sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(255, 152, 0, 0.1)', color: 'primary.main' }} 
                      />
                    ))}
                  </Box>
                  <Typography color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button 
                    size="small" 
                    startIcon={<GitHubIcon />} 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'text.primary' }}
                  >
                    View on GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
