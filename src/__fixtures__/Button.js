import React from 'react'
import styled from 'styled-components'
import SimpleButton from 'components/SimpleButton'
import StatefulButton from 'components/StatefulButton'
import Divider from '@material-ui/core/Divider'
import Space from 'components/Space'

const Root = styled.div``

export default (
  <Root>
    <SimpleButton title="hello" />

    <Space direction="y" value="two" />

    <Divider light={true} style={{ backgroundColor: 'peachpuff' }} />

    <Space direction="y" value="two" />

    <StatefulButton />
  </Root>
)
