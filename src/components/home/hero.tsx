import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import { useMediaQuery } from '@mui/material'

interface Feat {
  label: string
  value: string
}
interface FeatItemProps {
  item: Feat
}

const features: Array<Feat> = [
  {
    label: 'Graduate Aptitude Test in Engineering',
    value: 'GATE',
  },
  {
    label: 'Placement Exams',
    value: '20+',
  },
  {
    label: 'Mentorship Programs',
    value: '3+',
  },
]

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const TitleWithConditionalMargin = () => {
  const isScreenWidthGreaterThan1200 = useMediaQuery((theme: any) => theme.breakpoints.up('lg'))

  return <Box sx={{ ml: isScreenWidthGreaterThan1200 ? 10 : 0 }}>Propel Your Success.</Box>
}

const FeatItem: FC<FeatItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color: 'secondary.main', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5">
        {label}
      </Typography>
    </Box>
  )
}

const HomeHero: FC = () => {
  return (
    <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box mb={10} mt={-5} sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 40, md: 72 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'primary.main',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    Elevate{' '}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 24, md: 34 },
                        left: 2,
                        transform: 'rotate(3deg)',
                        '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                      }}
                    >
                      {/* eslint-disable-next-line */}
                      <img src="/images/headline-curve.svg" alt="Headline curve" />
                    </Box>
                  </Typography>
                  your{' '}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      position: 'relative',
                      '& svg': {
                        position: 'absolute',
                        top: -16,
                        right: -21,
                        width: { xs: 22, md: 30 },
                        height: 'auto',
                      },
                    }}
                  >
                    Potential
                    <svg version="1.1" viewBox="0 0 3183 3072">
                      <g id="Layer_x0020_1">
                        <path
                          fill="#00c861"
                          d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                        />
                        <path
                          fill="#00c861"
                          d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                        />
                        <path
                          fill="#00c861"
                          d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                        />
                      </g>
                    </svg>
                  </Typography>{' '}
                  <br />
                  {TitleWithConditionalMargin()}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '95%' } }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {
                    'Embark on a transformative learning journey with Propel Ascenders, the ultimate mentorship, and coaching platform, unlocking your true potential through personalized online courses and expert guidance.'
                  }
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {'Join us today to ascend to new heights in your personal and professional growth.'}
                </Typography>
              </Box>
              <Box sx={{ '& button': { ml: '2rem', mt: '1rem' } }}>
                <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="contained">
                    Get Started
                  </StyledButton>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ position: 'relative', mt: '7.5rem' }}>
            <Box sx={{ lineHeight: 0 }}>
              <Image
                src="/images/illustrations/3d-female-character-working-desk-with-laptop.png"
                width={775}
                height={787}
                alt="Hero img"
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ boxShadow: 2, py: 4, px: 7, borderRadius: 4 }}>
          <Grid container spacing={2}>
            {features.map((item) => (
              <Grid key={item.value} item xs={12} md={4}>
                <FeatItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeHero
