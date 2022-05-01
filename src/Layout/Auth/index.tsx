import { FC } from 'react';

import { ReactComponent as Logo } from '../../static/img/logo.svg';
import { Root, Title, Wrapper } from './StyledAuth';
import { IProps } from './types';

const AuthLayout: FC<IProps> = ({ children }) => {
	return (
		<Wrapper>
			<Root>
				<Logo />
				<Title>TODO APP</Title>
				{children}
			</Root>
		</Wrapper>
	);
};
export default AuthLayout;