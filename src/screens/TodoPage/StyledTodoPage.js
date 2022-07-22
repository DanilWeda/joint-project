import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1400px;
	width: 100%;
	margin-top: 2rem;
`;

export const Header = styled.div`
	display: flex;
	max-width: 1400px;
	width: 100%;
	padding-left: 2rem;
	gap: 0.8rem;
	align-items: center;
`;

export const UserName = styled.div`
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	color: #000000;
`;

export const LogoutButtom = styled.button`
	width: 15px;
	background: inherit;
	border: none;
	padding-top: 0.4rem;
	cursor: pointer;
`;

export const Title = styled.p`
	max-width: 1400px;
	width: 100%;
	text-align: center;
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	color: #000000;
`;

export const AddButton = styled.button`
	width: 30px;
	height: 30px;
	background: inherit;
	border: 1px solid #000;
	cursor: pointer;
	padding-top: 0.3rem;
	margin-left: 40rem;
	border-radius: 50%;
`;

export const BtnWrapper = styled.div`
	display: flex;
	max-width: 1400px;
	width: 100%;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;
`;

export const TodoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 3rem;
	gap: 1rem;
`;