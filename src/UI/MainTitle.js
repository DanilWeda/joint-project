import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin-top: 15px;
  color: ${({ color }) => color || '#000'};
  justify-self: ${({ justify }) => justify || 'center'};
`;

const Title = (props) => {
	return <StyledTitle {...props} />;
};

export default Title;
