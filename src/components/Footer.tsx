import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 6, backgroundColor: 'background.default', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: 700, background: 'linear-gradient(45deg, #ff9800 30%, #f44336 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Pwnzer0tt1
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Academic CTF team of Politecnico di Bari.
              <br />
              Always ready to hack and eat panzerotti 🚩
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              © {new Date().getFullYear()} Pwnzer0tt1.it. All rights reserved.
            </Typography>
          </Box>
          
          <SocialLinks iconSize="medium" />
        </Stack>
      </Container>
    </Box>
  );
}
