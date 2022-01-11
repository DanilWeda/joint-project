import React from 'react'
import styled from 'styled-components'

const StyledMainInput = styled.input`
  min-width: 100%;
  height: ${({ height }) => height || '100px'};
  font-size: 20px;
  padding-left: 10px;
`

const MainInput = (props) => {
  return <StyledMainInput {...props} />
}

export default MainInput
