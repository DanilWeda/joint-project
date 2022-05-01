import { FC } from 'react';

import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import AuthLayout from '../../Layout/Auth';
import { Wrapper } from './StyledSignUpPage';

const SignPage: FC = () => {
	return (
		<AuthLayout>
			<Wrapper>
				<CustomInput type='text' placeholder='Login' />
				<CustomInput type='password' placeholder='Password' />
				<Button width='100%' link='/todo'>Sign Up</Button>
			</Wrapper>
		</AuthLayout>
	);
};

export default SignPage;
