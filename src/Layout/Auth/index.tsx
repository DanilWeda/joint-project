import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { paths } from 'routes/index';
import { ReactComponent as Logo } from 'static/img/logo.svg';

import { BackButton, BtnWrapper, Root, Title, Wrapper } from './StyledAuth';
import { IProps } from './types';;


const AuthLayout: FC<IProps> = ({ children }) => {

	const location = useLocation();
	const navigate = useNavigate();



	return (
		<>
			<Wrapper>
				<Root>
					<BtnWrapper>
						{location.pathname !== paths.newUser && <BackButton onClick={() => navigate(-1)} > back</BackButton>}
					</BtnWrapper>
					<Logo />
					<Title>TODO APP</Title>
					{children}
				</Root>
			</Wrapper>
		</>
	);
};
export default AuthLayout;