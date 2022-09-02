import styled from 'styled-components';

export const Wrapper = styled.div`
	a {
		text-decoration: none;
		text-align: center;
	}
`;

export const StyledButton = styled.button`
	display: flex;
	width: 100%;
	justify-content: center;
	color: ${({ theme }) => theme.colorBlack} ;
	border: 1px solid ${({ theme }) => theme.colorBlack};
	box-sizing: border-box;
	border-radius: 5px;
	font-size: 18px;
	margin-bottom: 2rem;
	padding: 1rem 2.5rem;
	background-color: transparent;
	cursor: pointer;
	min-width: 12rem;
	transition: ${({ theme }) => theme.btnTransition};
	box-shadow: ${({ theme }) => theme.shadow};
	text-align: center;

	&:hover {
		transition: ${({ theme }) => theme.btnTransition};
		background-color: ${({ theme }) => theme.colorPrimary};
		border: 1px solid ${({ theme }) => theme.colorPrimary};
	}
`;