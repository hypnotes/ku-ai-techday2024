import Footer from '@components/Footer'
import Leader from '@components/Homepage/Leader'
import Title from '@components/Homepage/Title'
import { Grid, styled } from '@mui/material'
import Box from '@mui/material/Box'
import BackgroundImage from '/assets/images/background.png'

export default function HomePage() {
  return (
    <PageContainer>
      <Grid container width={'100vw'}>
        <Title />
        <Leader />
      </Grid>
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
