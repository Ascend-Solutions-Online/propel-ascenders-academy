import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import DoneIcon from '@mui/icons-material/Done'
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Easy Accessible',
    description: 'Gain easy access to high-quality course materials and resources, making learning a breeze.',
    icon: <ArtTrackIcon />,
  },
 
  {
    title: 'Personalized Study Plan',
    description:
      'Receive a customized study plan tailored to your strengths and weaknesses, ensuring efficient preparation for the GATE exam.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Expert Test-taking Strategies',
    description:
      'Learn valuable tips and strategies for tackling the GATE exam effectively, maximizing your chances of success.',
    icon: <DoneIcon />,
  },
  {
    title: 'More Affordable Cost',
    description: 'Enjoy learning at a more affordable cost without compromising on the quality of education.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Mock Tests and Performance Analysis',
    description:
      'Access regular mock tests to assess your progress and identify areas for improvement, accompanied by detailed performance analysis.',
    icon: <AssessmentOutlinedIcon />,
  },
  {
    title: '24/7 Doubt Resolution Support',
    description:
      'Get round-the-clock doubt resolution support, where you can clarify your queries and receive prompt responses from the mentor.',
    icon: <HelpOutlineIcon />,
  },
  {
    title: 'Regular 1:1 Consultation',
    description: 'Receive personalized mentorship and guidance from the  mentors to excel in your journey.',
    icon: <ContactSupportIcon />,
  },
  {
    title: 'Comprehensive Study Material',
    description:
      'Receive access to comprehensive study materials, including notes, video lectures, and practice exercises, to facilitate thorough preparation.',
    icon: <LiveHelpOutlinedIcon />,
  },
]
