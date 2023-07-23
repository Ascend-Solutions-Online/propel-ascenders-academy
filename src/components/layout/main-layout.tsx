import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Footer } from '@/components/footer'
import Header from '@/components/header/header'
import { Copyright } from '../copyright/Copyright'

interface Props {
  children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main">
      <Header />
      {children}
      <Footer />
      <Copyright />
    </Box>
  )
}

export default MainLayout
