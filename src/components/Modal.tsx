import React from 'react'
import { Dialog, DialogActions, DialogContent, Button, Typography } from '@mui/material'

interface ModalProps {
  open: boolean
  onClose: () => void
  message: string
}

const Modal: React.FC<ModalProps> = ({ open, onClose, message }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Typography variant="h4">Hey Ascender!!</Typography>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal
