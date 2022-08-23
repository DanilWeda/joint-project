import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 20px;
	font-weight: 500;
	margin-top: 45px;
`;

export const InputWrapper = styled.div`
	display: flex;
	box-sizing: border-box;
	border-radius: 30px;
	padding: 0.3rem;
	font-size: 1rem;
	border: 1px solid ${({ theme }) => theme.colorBlack};
	flex-grow: 0.2;
	align-items: center;
	box-shadow: ${({ theme }) => theme.shadow};
	margin-top: 45px;
	max-width: 600px;
	min-width: 200px;
	width: calc(100% + 50px);
`;


export const Input = styled.input`
	font-size: 1rem;
	border: none;
	background-color: inherit;
	padding: 0.5rem;
	outline: none;
	font-style: italic;
	padding: 10px;
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