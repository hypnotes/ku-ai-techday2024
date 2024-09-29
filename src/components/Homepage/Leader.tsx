import { Link } from 'react-router-dom'
import { LinkTypography } from '@components/LinkBox'
import { LEADER } from '@/data/leader'
import LinkIcon from '@mui/icons-material/Link'
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'

const Leader = () => {
  const matches = useMediaQuery('(max-width:800px)')
  const theme = useTheme()
  return (
    <Grid
      item
      sm={12}
      md={6}
      lg={6}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: theme.spacing(8)
      }}
    >
      <Grid
        item
        lg={8}
        md={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}
      >
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={matches ? 'center' : 'flex-end'}
        >
          <img
            src={LEADER.profile}
            width={180}
            height={240}
            loading="lazy"
            style={{ borderRadius: 240 }}
          />
        </Box>
        <Box
          sx={{ display: 'flex', flexDirection: 'column' }}
          mt={theme.spacing(4)}
          mb={matches ? 10 : 0}
        >
          <Typography
            variant="h5"
            fontWeight="700"
            textAlign={matches ? 'left' : 'right'}
            color={theme.palette.primary.main}
          >
            인사말
          </Typography>
          <Typography
            variant="h6"
            fontWeight="700"
            mt={theme.spacing(1)}
            textAlign={matches ? 'left' : 'right'}
            color={theme.palette.grey[300]}
          >
            {LEADER.position} {LEADER.name}
          </Typography>
          <Box maxWidth={'800px'} color={theme.palette.grey[300]}>
            <Typography
              variant="body2"
              fontWeight="400"
              mt={theme.spacing(1)}
              textAlign={matches ? 'left' : 'justify'}
            >
              {LEADER.content}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Link
              to="https://mpij.korea.ac.kr/"
              target='_blank'
              style={{ textDecoration: 'none' }}
            >
              <LinkTypography>
                <LinkIcon sx={{ width: 21, height: 21 }} />
                <Typography
                  variant={matches ? 'body2' : 'body1'}
                  ml={1}
                  fontWeight={'regular'}
                  color="inherit"
                >
                  사업단 홈페이지
                </Typography>
              </LinkTypography>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Leader
