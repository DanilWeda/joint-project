import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100vw;
	height: 80vh;
	max-width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Root = styled.div`
	width: 50vw;
	min-height: 50vh;
	border: 1px solid #000;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	button:first-child {
		display: flex;
		width: 100%;
		padding-left: 20px;
	}
`;

export const Title = styled.h1`
	font-size: 20px;
	font-weight: 500;
	margin-top: 1rem;
`;

export const BackButton = styled.button`
	font-size: 1rem;
	text-decoration: underline;
	padding: 2px;
	font-weight: 400;
	margin-top: 1rem;
	border: none;
	background: none;
	&:hover {
		cursor: pointer;
	};
`;