import styled from 'styled-components';


export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: center;
`;

export const InputWrapper = styled.div`
	display: flex;
	box-sizing: border-box;
	border-radius: 15px;
	font-size: 1rem;
	border: 1px solid ${({ theme }) => theme.colorBlack};
	flex-grow: 0.2;
	margin-left: 1rem;
	align-items: center;
`;
export const IconWrapper = styled.div`
	display: flex;
`;

export const Input = styled.input`
	flex-grow: 1;
	font-size: 1rem;
	border: none;
	background-color: inherit;
	padding: 0.5rem;
	outline: none;
	pointer-events: none;
`;

export const CheckButton = styled.button`
	width: 30px;
	height: 30px;
	background: inherit;
	border: 1px solid ${({ theme }) => theme.colorBlack};
	cursor: pointer;
	border-radius: 50%;
	padding-top: 0.3rem;
`;

export const IconButton = styled.button`
	width: 30px;
	height: 30px;
	background: inherit;
	border: none;
	cursor: pointer;
`;