import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={9} sx={{ color: 'black' }}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography variant="h4" component="h1" sx={{ fontWeight: 700, '& span': { color: 'white' } }}>
                Propel<span>Ascenders</span>
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Propel Ascenders is an online Mentorship platform that has been operating since 2022 until now.
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2, mt: 3 }}>
                Drop a mail at ascendsolutionsonline@gmail.com for more details.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
