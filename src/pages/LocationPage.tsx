import PageContainer from '@components/containers/PageContainer'
import KakaoMap from '@components/location/KakaoMap'
import LinkIcon from '@mui/icons-material/Link'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Box, Button, Divider, Grid, Typography, useTheme } from '@mui/material'

const LOCATION = '서울 성북구 고려대로22길 6-7'
const SPECIFIC_LOCATION = '고려대학교 하나스퀘어 (지하1층)'
const MAP_ROUTE_URL =
  'https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,505738,1134818&rt1=&rt2=%EA%B3%A0%EB%A0%A4%EB%8C%80%ED%95%99%EA%B5%90%20%ED%95%98%EB%82%98%EC%8A%A4%ED%80%98%EC%96%B4&rtIds=,17564816'

const LocationPage = () => {
  const theme = useTheme()
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
        <Grid
          container
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mt: theme.spacing(10)
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: theme.spacing(1),
              justifyContent: 'center'
            }}
          >
            <LocationOnIcon color="secondary" sx={{ width: 21, height: 21 }} />
            <Typography variant="body1" fontWeight={800}>
              {LOCATION}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" fontWeight={800}>
              {SPECIFIC_LOCATION}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              marginY: theme.spacing(5)
            }}
          >
            <Divider
              sx={{
                height: 3,
                width: '12%',
                backgroundColor: '#02306C',
                mr: theme.spacing(2)
              }}
            />
            <Typography variant="h6" fontWeight={800} color="secondary">
              지도
            </Typography>
            <Divider
              sx={{
                height: 3,
                width: '12%',
                backgroundColor: '#02306C',
                ml: theme.spacing(2)
              }}
            />
          </Box>
          <Box
            component={Button}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1
            }}
            onClick={() => window.open(MAP_ROUTE_URL, '_blank')}
          >
            <LinkIcon color="secondary" sx={{ width: 21, height: 21 }} />
            <Typography variant="body2" fontWeight={800}>
              지도 바로가기
            </Typography>
          </Box>
          <KakaoMap />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              marginY: theme.spacing(5)
            }}
          >
            <Divider
              sx={{
                height: 3,
                width: '12%',
                backgroundColor: '#02306C',
                mr: theme.spacing(2)
              }}
            />
            <Typography variant="h6" fontWeight={800} color="secondary">
              행사장 도면
            </Typography>
            <Divider
              sx={{
                height: 3,
                width: '12%',
                backgroundColor: '#02306C',
                ml: theme.spacing(2)
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src="src/assets/images/blueprint.png" width="50%" />
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default LocationPage
