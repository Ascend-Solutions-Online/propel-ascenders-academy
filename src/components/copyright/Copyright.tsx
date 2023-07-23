import { Grid, Typography } from '@mui/material'
import { FC } from 'react'

export const Copyright: FC = () => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        backgroundColor: 'primary.main',
        py: { xs: 6, md: 3 },
        mt: '-3rem',
        color: 'primary.contrastText',
      }}
    >
      <Grid item xs={12} md={12} mt={'1rem'} mb={0} sx={{ color: 'black' }}>
        <Typography sx={{ fontSize: '0.78rem' }} align="center">
          Made with ❤️ ||  Ascend Solutions Online
        </Typography>
        <Typography sx={{ fontSize: '0.78rem' }} align="center">
          © 2023 Propel Ascenders.
        </Typography>
        <Typography sx={{ fontSize: '0.78rem' }} align="center">
          All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  )
}
