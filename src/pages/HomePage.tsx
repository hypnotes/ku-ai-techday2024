import Footer from '@components/Footer'
import Leader from '@components/Homepage/Leader'
import Title from '@components/Homepage/Title'
import { Grid, styled, useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import BackgroundImage from '/assets/images/background.png'

export default function HomePage() {
  const matches = useMediaQuery('(min-width:600px)')
  return (
    <PageContainer>
      <Grid
        container
        width={'100vw'}
        height={matches ? '85vh' : '100%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Title />
        <Leader />
      </Grid>
      <Box sx={{ flexGrow: 1 }} />
      <Footer />
    </PageContainer>
  )
}

const PageContainer = styled(Box)({
  width: '100%',
  minHeight: '100vh', // Ensures the container covers at least the full viewport height
  background: `url(${BackgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed', // Keeps the background fixed during scrolling or zooming
  display: 'flex', // Ensures the content stretches properly
  flexDirection: 'column' // Aligns content vertically if needed
})
