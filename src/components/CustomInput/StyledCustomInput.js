import styled from 'styled-components';

export const Input = styled.input`
	box-sizing: border-box;
	border-radius: 5px;
	font-size: 1rem;
	border: 1px solid ${({ theme }) => theme.colorBlack};
	background: ${({ theme }) => theme.colorWhite};
	padding: 0.8rem;
`;