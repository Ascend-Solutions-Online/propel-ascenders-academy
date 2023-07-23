import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import type { Navigation } from '@/interfaces/navigation'
import { FooterSectionTitle } from '@/components/footer'
import { Typography } from '@mui/material'

const pageMenu = [
  {
    label: 'Home',
    path: '#', // '/',
  },
  {
    label: 'Courses',
    path: '/popular-course', // '/popular-course',
  },
  {
    label: 'Testimonial',
    path: 'testimonial', // '/testimonial',
  },
]

const companyMenu: Array<Navigation> = [
  { label: 'Contact Us', path: '#' },
  { label: 'Privacy & Policy', path: '#' },
  { label: 'Term & Condition', path: '#' },
  { label: 'FAQ', path: '#' },
]

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <Typography
            key={index + path}
            sx={{
              display: 'block',
              mb: 1,
              // color: 'primary.contrastText',
              color: 'black',
            }}
          >
            {label}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={12} md={6}>
        <FooterSectionTitle title="About" />
        {companyMenu.map(({ label, path }, index) => (
          <Typography
            key={index + path}
            sx={{
              display: 'block',
              mb: 1,
              // color: 'primary.contrastText',
              color: 'black',
            }}
          >
            {label}
          </Typography>
        ))}
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
