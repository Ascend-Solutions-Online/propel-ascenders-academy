import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import MainLayout from '@/components/main-layout'

const DynamicHomeHero = dynamic(() => import('../sections/hero'))
const DynamicHomeFeature = dynamic(() => import('../sections/feature'))
const DynamicHomePopularCourse = dynamic(() => import('../sections/popular-courses'))
const DynamicHomeTestimonial = dynamic(() => import('../sections/testimonial'))
const DynamicHomeGetStarted = dynamic(() => import('../sections/get-started'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicHomePopularCourse />
      <DynamicHomeFeature />
      <DynamicHomeTestimonial />
      <DynamicHomeGetStarted />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
