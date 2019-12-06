import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Space from 'components/Space'
import Textfield from '@material-ui/core/Textfield'

const Root = styled.div``

const StatefulButton = () => {
  const [color, setColor] = useState('primary')
  const [content, setContent] = useState('edit me')

  const toggleButtonType = () => {
    color === 'primary' ? setColor('secondary') : setColor('primary')
  }

  return (
    <Root>
      <Button color={color} variant="outlined">
        {content}
      </Button>

      <Space direction="y" value="one" />

      <Textfield
        value={content}
        onChange={({ target: { value } }) => setContent(value)}
      />

      <Button onClick={toggleButtonType}>toggle</Button>
    </Root>
  )
}

export default StatefulButton
