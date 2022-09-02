import Button from 'components/Button';
import { useAuth } from 'hooks/useAuth';
import AuthLayout from 'Layout/Auth';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from 'routes/index';

import { BtnWrapper } from './StyledNewPage';


const NewUserPage: FC = () => {
	const { isAuth } = useAuth();
	const navigate = useNavigate();

	if (isAuth) {
		navigate('/todos');
	}

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
