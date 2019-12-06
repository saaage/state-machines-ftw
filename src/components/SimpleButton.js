import React from 'react'
import Button from '@material-ui/core/Button'

const SimpleButton = ({ title }) => (
  <Button color="primary" variant="outlined">
    {title}
  </Button>
)

export default SimpleButton
