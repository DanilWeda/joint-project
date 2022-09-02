import styled from 'styled-components';


export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	width: 100vw;
	height: 100vh;
	font-size: 3rem;
	background-color: ${({ theme }) => theme.colorBlack};
	color: ${({ theme }) => theme.colorWhite};
	top: 0;
	left: 0;
	opacity: 0.222;
	z-index: 1;
`;