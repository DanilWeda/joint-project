import { FC } from 'react';

import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import AuthLayout from '../../Layout/Auth';
import { Wrapper } from './StyledLoginPage';


const LoginPage: FC = () => {
	return <AuthLayout>
		<Wrapper>
			<CustomInput type='text' placeholder='Login' />
			<CustomInput type='password' placeholder='Password' />
			<Button width='100%' link='/todo'>Login</Button>
		</Wrapper>
	</AuthLayout>;
};

export default LoginPage;
