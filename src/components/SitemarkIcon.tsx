import { Typography } from '@mui/material'

export default function SitemarkIcon({ isRevert }: { isRevert: boolean }) {
  return (
    <Typography
      variant="h6"
      component="span"
      sx={{ color: 'primary.main', fontWeight: 'bold' }}
    >
      AI Tech Day 2024
    </Typography>
  )
}
