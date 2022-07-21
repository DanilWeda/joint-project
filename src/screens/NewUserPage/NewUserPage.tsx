import { FC } from 'react';

import Button from '../../components/Button';
import AuthLayout from '../../Layout/Auth';
import { paths } from '../../routes/index';
import { BtnWrapper } from './StyledNewPage';


const NewUserPage: FC = () => {
	return (
		<AuthLayout>
			<BtnWrapper>
				<Button link={paths.login}>Login</Button>
				<Button link={paths.signup}>Sign Up</Button>
			</BtnWrapper>
		</AuthLayout>
	);
};

export default NewUserPage;
