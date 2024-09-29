import PageContainer from '@components/containers/PageContainer'
import ProfessorContainer from '@components/professors/Professor'
import LectureContainer from '@components/professors/lectures'
import { INVITED_LECTURER, PROFESSORS } from '@/data/professors'
import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'

const OrganizerPage = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <PageContainer>
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80%',
            marginTop: theme.spacing(5)
          }}
        >
          <Typography
            mt={2}
            variant="h4"
            fontWeight="900"
            color="secondary"
            sx={{ alignSelf: 'flex-end' }}
          >
            PROFESSORS
          </Typography>
          {!isMobile && (
            <Divider
              sx={{
                height: 3,
                width: '70%',
                backgroundColor: '#02306C',
                marginLeft: 1
              }}
            />
          )}
        </Box>
        <Grid
          container
          item
          sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: theme.spacing(3),
            justifyContent: 'center',
            width: '80%'
          }}
        >
          {PROFESSORS.map((professor, index) => (
            <ProfessorContainer professor={professor} key={index} />
          ))}
        </Grid>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80%',
            marginTop: theme.spacing(5)
          }}
        >
          <Typography
            variant="h4"
            fontWeight="900"
            color="secondary"
            sx={{ alignSelf: 'flex-end' }}
          >
            INVITED SPEAKERS
          </Typography>
          {!isMobile && (
            <Divider
              sx={{
                height: 3,
                width: '70%',
                backgroundColor: '#02306C',
                marginLeft: 1
              }}
            />
          )}
        </Box>
        <Typography>TO BE ANNOUNCED 🎉</Typography>
        {/* {INVITED_LECTURER.map((lecturer, index) => (
          <LectureContainer lecturer={lecturer} key={index} />
        ))} */}
      </Grid>
    </PageContainer>
  )
}

export default OrganizerPage
