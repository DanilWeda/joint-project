import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 20px;
	font-weight: 500;
	margin-top: 45px;
`;

export const ConfirmHideWrapper = styled.div`
	display: flex;
	box-sizing: border-box;
	padding: 0.3rem;
	font-size: 1rem;
	gap: 1rem;
	align-items: center;
	justify-content: center;
	max-width: 600px;
	min-width: 200px;
	width: calc(100% + 50px);
`;



export const Paragraph = styled.p`
	font-size: 1.5rem;
	margin: 32px 0;
	font-style: italic;
`;

export const Subtext = styled.p`
	font-weight: 500;
	font-size:1rem;
`;

export const Checkbox = styled.div`
	border: 2px solid ${({ theme }) => theme.colorBlack};
	width: 18px;
	height: 18px;
	position: relative;
`;

export const Button = styled.button`
	color: ${({ theme }) => theme.colorBlack} ;
	border:none;
	box-sizing: border-box;
	border-radius: 5px;
	font-size: 30px;
	padding: 1rem 2.5rem;
	background-color: ${({ color, theme }) => color === 'cancel' ? theme.colorCancel : theme.colorAccept};
	cursor: pointer;
	min-width: 160px;
	transition: ${({ theme }) => theme.btnTransition};
	box-shadow: ${({ theme }) => theme.shadow};
	text-align: center;

	&:hover {
		transition: ${({ theme }) => theme.btnTransition};
		background-color: ${({ color, theme }) => color === 'cancel' ? theme.colorError : theme.colorAcceptLight};
	}
`;


export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: 0 60px 45px 60px;
	svg {
		padding:  0 10px;
		width: 50px;
		height: 50px;
	}
`;

export const BtnWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 80px;
	margin-top: 60px;
	padding: 10px;
`;