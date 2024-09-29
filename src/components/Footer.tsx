import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        textAlign: { sm: 'center', md: 'left' },
        paddingBottom: 2,
        width: '90vw'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 1, sm: 2 },
          width: '90vw',
          borderTop: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={6}>
            <img
              src={'/assets/images/ict_logo.png'}
              alt="Mobile AI Systems"
              height={40}
            />
          </Grid>
          <Grid item xs={12} sm={6} textAlign={{ xs: 'start', sm: 'end' }}>
            <Typography variant="body2" color="text.secondary" mt={1}>
              {'Copyright © '}
              <Link href="https://mpij.korea.ac.kr/mpij/index.do">
                ICT Creative Consilience Foundation &nbsp;
              </Link>
              {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
