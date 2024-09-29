import { Professor } from '@/data/professors'
import Link from '@mui/icons-material/Link'
import {
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'

const ProfessorContainer = ({ professor }: { professor: Professor }) => {
  const { palette } = useTheme()

  const isMobile = useMediaQuery('(max-width:500px)')

  return (
    <Grid
      item
      lg={4}
      md={4}
      sm={12}
      xs={12}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 1,
        marginY: 1,
        width: '80%',
        borderRadius: 2,
        padding: 2,
        ':hover': {
          backgroundColor: palette.action.hover,
          cursor: 'pointer'
        }
      }}
      onClick={() => window.open(professor.url, '_blank')}
    >
      <Grid item lg={6} sm={6}>
        <img
          src={professor.profile}
          width={isMobile ? 40 : 80}
          height={isMobile ? 40 : 80}
          style={{ borderRadius: 40 }}
        />
      </Grid>
      <Grid item ml={1} lg={6} sm={6}>
        <Typography
          display={isMobile ? 'inline' : 'block'}
          variant="subtitle1"
          textAlign={'left'}
          fontWeight={'bold'}
        >
          {professor.name}
        </Typography>
        {isMobile && (
          <Typography
            display={'inline'}
            variant="caption"
            color={palette.text.disabled}
          >
            &nbsp;고려대학교
          </Typography>
        )}
        <Typography
          variant="body2"
          textAlign={'left'}
          display={'flex'}
          alignItems={'center'}
        >
          <Link color="secondary" fontSize="small" />
          &nbsp;{professor.lab}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ProfessorContainer
