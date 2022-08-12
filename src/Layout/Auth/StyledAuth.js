import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	max-width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Root = styled.div`
	--minWidth: 700px;
	--minHeight: 300px;
	width: auto;
	height: auto;
	max-width: calc(var(--minWidth) *2 );
	max-height: calc(var(--minHeight) * 2);
	min-width: var(--minWidth);
	min-height: var(--minHeight);
	border: 1px solid #000;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h1`
	font-size: 20px;
	font-weight: 500;
	margin-top: 1rem;
`;

export const BackButton = styled.button`
	font-size: 1rem;
	display: flex;
	text-decoration: none;
	font-weight: 400;
	margin-top: 1rem;
	padding: 0.5rem 0.8rem;
	border: 1px solid ${({ theme }) => theme.colorBlack};
	border-radius: 5px;
	text-transform: uppercase;
	background: none;
	transition: ${({ theme }) => theme.btnTransition};

	&:hover {
		cursor: pointer;
		border: 1px solid ${({ theme }) => theme.colorCancel};
		background-color: ${({ theme }) => theme.colorCancel};
		transition: ${({ theme }) => theme.btnTransition};

	};
	&::before {
		content: "⇐";
		margin-right: 0.5rem;
	}
`;
export const BtnWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: start;
	margin-left: 3rem;

`;