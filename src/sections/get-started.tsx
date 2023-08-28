import React, { useState } from 'react'
import {
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  Box,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from '@mui/material'
import Image from 'next/image'
import Modal from '../components/Modal'
import { CircleOutlined, Favorite, FavoriteBorder, TaskAltOutlined } from '@mui/icons-material'

const GetStartedSection: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [mobile, setMobile] = useState('')
  const [whatsappChecked, setWhatsappChecked] = useState(false)
  const [yearOfStudying, setYearOfStudying] = useState('')
  const [courseInterestedIn, setCourseInterestedIn] = useState('')

  const [submissionStatus, setSubmissionStatus] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()

    const formData = { name, email, message, mobile, whatsappChecked, yearOfStudying }

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmissionStatus('Message submitted successfully! Expect a response within 24 hours.')
        setShowModal(true)
      } else {
        setSubmissionStatus('An error occurred while submitting the message.')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmissionStatus('An error occurred while submitting the message.')
    }
  }

  const handleCloseModal = (): void => {
    setShowModal(false)
    setName('')
    setEmail('')
    setMessage('')
    setMobile('')
    setWhatsappChecked(false)
    setYearOfStudying('')
    setCourseInterestedIn('')
  }

  return (
    <Box id="testimonial" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Image
                src="/images/illustrations/3d-female-character-speaking-smartphone.png"
                width={760}
                height={760}
                alt="Get Started"
              />
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Typography variant="h4" sx={{ mb: 2 }}>
                Connect with us for more details...
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      required
                      margin="normal"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      margin="normal"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Mobile Number"
                      variant="outlined"
                      fullWidth
                      required
                      margin="normal"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<CircleOutlined />}
                          checkedIcon={<TaskAltOutlined />}
                          checked={whatsappChecked}
                          onChange={(e) => setWhatsappChecked(e.target.checked)}
                          color="primary"
                        />
                      }
                      label="Above number is on WhatsApp too"
                    />
                  </Grid>
                  <Grid container spacing={2} margin="auto">
                    <Grid item xs={12} md={6}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Year of Studying</FormLabel>
                        <RadioGroup
                          aria-label="yearOfStudying"
                          name="yearOfStudying"
                          value={yearOfStudying}
                          onChange={(e) => setYearOfStudying(e.target.value)}
                        >
                          <FormControlLabel value="First Year" control={<Radio />} label="First Year" />
                          <FormControlLabel value="Second Year" control={<Radio />} label="Second Year" />
                          <FormControlLabel value="Third Year" control={<Radio />} label="Third Year" />
                          <FormControlLabel value="Fourth Year" control={<Radio />} label="Fourth Year" />
                          <FormControlLabel
                            value="Working Professional"
                            control={<Radio />}
                            label="Working Professional"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Course Interested In</FormLabel>
                        <RadioGroup
                          aria-label="courseInterestedIn"
                          name="courseInterestedIn"
                          value={courseInterestedIn}
                          onChange={(e) => setCourseInterestedIn(e.target.value)}
                        >
                          <FormControlLabel value="GATE" control={<Radio />} label="GATE" />
                          <FormControlLabel value="Placements" control={<Radio />} label="Placements" />
                          <FormControlLabel value="Both" control={<Radio />} label="Both" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="What do you want to know?"
                      variant="outlined"
                      multiline
                      rows={2}
                      fullWidth
                      required
                      margin="normal"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="I need more details about the course ... "
                    />
                  </Grid>
                  <Grid item xs={12}></Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth type="submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
              <Modal open={showModal} onClose={handleCloseModal} message={submissionStatus} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  )
}

export default GetStartedSection
