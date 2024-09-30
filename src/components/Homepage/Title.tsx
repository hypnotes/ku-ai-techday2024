import { Link } from 'react-router-dom'
import { LinkTypography } from '@components/LinkBox'
import { REGISTER_URL } from '@/data/register'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LinkIcon from '@mui/icons-material/Link'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'

const Title = () => {
  const theme = useTheme()
  const matches = useMediaQuery('(max-width:1000px)')
  return (
    <Grid
      item
      sm={12}
      md={6}
      lg={6}
      p={matches ? 3 : 5}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      justifyContent={matches ? 'center' : 'flex-end'}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
        my={10}
        mt={matches ? 20 : 10}
      >
        <Typography color={'whitesmoke'} variant={matches ? 'subtitle2' : 'h5'}>
          고려대학교 ICT명품인재양성사업단/초지능연구센터&nbsp;
        </Typography>
        <Typography
          color={'white'}
          variant={'h2'}
          sx={{ fontWeight: 900, marginBottom: theme.spacing(2) }}
        >
          AI TECH DAY{matches && <br />} 2024
        </Typography>
      </Box>
      <Box mx={matches ? 0.5 : 1}>
        <Grid>
          <Link to={'/program'} style={{ textDecoration: 'none' }}>
            <LinkTypography>
              <CalendarTodayIcon color="inherit" fontSize="small" />
              <Typography
                variant={matches ? 'body2' : 'body1'}
                ml={1}
                fontWeight={'regular'}
                color="inherit"
              >
                2024.10.18(금) 10:00 ~ 18:00
              </Typography>
            </LinkTypography>
          </Link>
        </Grid>

        <Grid mt={1}>
          <Link to={'/location'} style={{ textDecoration: 'none' }}>
            <LinkTypography>
              <LocationOnIcon color="inherit" fontSize="small" />
              <Typography
                variant={matches ? 'body2' : 'body1'}
                ml={1}
                fontWeight={'regular'}
                color="inherit"
              >
                고려대학교 하나스퀘어 (지하 1층)
              </Typography>
            </LinkTypography>
          </Link>
        </Grid>
        <Grid mt={1}>
          <Link
            to="/"
            style={{ textDecoration: 'none' }}
            onClick={() => window.open(REGISTER_URL, '_blank')}
          >
            <LinkTypography>
              <LinkIcon sx={{ width: 21, height: 21 }} />
              <Typography
                variant={matches ? 'body2' : 'body1'}
                ml={1}
                fontWeight={'regular'}
                color="inherit"
              >
                사전등록 바로가기
              </Typography>
            </LinkTypography>
          </Link>
          <Box ml={4}>
            <Typography
              variant={'caption'}
              fontWeight={'regular'}
              color={theme.palette.grey[300]}
            >
              사전등록하신 분들에게는 배지(네임택)와 행사 당일 사용가능한 쿠폰을
              제공합니다
            </Typography>
          </Box>
        </Grid>
      </Box>
      <Box mt={6} mb={2} color={theme.palette.grey[300]}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="subtitle1" fontWeight="bold">
            연구 교류 및 성과 공유
          </Typography>
          <Typography variant="caption">
            사업단 소속 교수진 연구개발 성과 발표
          </Typography>
          <Typography variant="caption">
            사업단 산하 연구실 포스터 전시 및 데모
          </Typography>
          <Typography variant="caption">
            AI 기업 연구개발 성과 및 미래 전략 발표
          </Typography>
          <Typography variant="caption">기업체 홍보 및 리크루팅</Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="subtitle1" fontWeight="bold">
            초청강연
          </Typography>
          <Typography variant="caption">
            루닛, NCSOFT, LG AI 연구원, KT, 퓨리오사 AI, 업스테이지
          </Typography>
        </Box>
        {/* <Box mt={2}>
          <Typography variant="subtitle1" fontWeight="bold">
            Recruiting 참여 기업
          </Typography>
          <Typography variant="caption" mt={1}>
            Samsung Research, 삼성전기, 한화시스템, FuriosaAI 등
          </Typography>
        </Box> */}
      </Box>
    </Grid>
  )
}

export default Title
