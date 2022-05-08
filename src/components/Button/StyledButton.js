import styled from 'styled-components';

export const StyledButton = styled.button`
	width: ${props => props.width || 'auto'};
	color: ${props => props.color} ;
	border: 1px solid #000000;
	box-sizing: border-box;
	border-radius: 5px;
	font-size: 18px;
	margin-bottom: 1rem;
	padding: 1rem 2.5rem;
	background-color: transparent;
	cursor: pointer;
	min-width: 12rem;
	transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

	&:hover {
		transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
		background-color: #C9EEFF;
	}
`;