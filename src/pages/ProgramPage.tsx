import ScheduleGrid from '@components/ScheduleGrid'
import { Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Footer from '../components/Footer'

export default function ProgramPage() {
  return (
    <Box sx={{ bgcolor: 'background.default' }} mt={16}>
      <Typography
        variant="h4"
        fontWeight="900"
        color="secondary"
        textAlign={'center'}
      >
        PROGRAM
      </Typography>
      <ScheduleGrid />
      <Footer />
    </Box>
  )
}
