import styled from 'styled-components';

export const Overlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme }) => theme.colorWhite};
	position: absolute;
	top: 0;
	left: 0;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme }) => theme.colorWhite};
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
`;

export const Root = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid ${({ theme }) => theme.colorBlack};
	z-index: 11;
	border-radius: 20px;
	padding: 1rem;

`;

export const Ico = styled.div`
	width: 100%;
	display: flex;
	justify-content: end;
	border-radius: 20px 20px 0 0;
	svg {
		cursor: pointer;
		transition: transform 0.5s ease-in-out;
		&:hover {
			transform: rotate(90deg);
		}
	}
`;

export const Content = styled.div`
	min-width: 450px;
	min-height: 300px;
`;

