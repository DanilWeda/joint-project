import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledBtn = styled.button`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  border-radius: 5px;
  border: 1px solid ${({ color }) => color || '#000'};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    background: #c9eeff;
  }
`

const Btn = ({ link, ...props }) => {
  return (
    <Link to={link}>
      <StyledBtn {...props} />
    </Link>
  )
}

export default Btn
