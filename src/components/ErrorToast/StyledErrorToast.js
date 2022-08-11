import styled from 'styled-components';

export const ErrorWrapper = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	color: ${props => props.theme.static.error};
`;
export const ErrorText = styled.p`
	padding-left: 1rem;
`;