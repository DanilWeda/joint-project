import { FC } from 'react';

import Button from '../../components/Button';
import AuthLayout from '../../Layout/Auth';
import { BtnWrapper } from './StyledNewPage';


const NewUserPage: FC = () => {
	return <AuthLayout>
		<BtnWrapper>
			<Button link='/login'>Login</Button>
			<Button link='/signup'>Sign Up</Button>
		</BtnWrapper>
	</AuthLayout>;
};

export default NewUserPage;
