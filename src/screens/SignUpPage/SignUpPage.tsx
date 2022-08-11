import Button from 'components/Button';
import CustomInput from 'components/CustomInput';
import Error from 'components/ErrorToast';
import Loader from 'components/Loader';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAuth } from 'hooks/useAuth';
import { useForm } from 'hooks/useForm';
import AuthLayout from 'Layout/Auth';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from 'routes/index';
import { loginOrCreateUser } from 'store/slices/userSlice/action';

import { Wrapper } from './StyledSignUpPage';

const SignPage: FC = () => {
	const { login, password, changeLogin, changePassword } = useForm();
	const { loading, error } = useAppSelector(state => state.user);
	const [userError, setUserError] = useState(error);
	const dispatch = useAppDispatch();

	const navigate = useNavigate();
	const { isAuth } = useAuth();

	useEffect(() => {
		setUserError(false);
	}, [login, password]);

	useEffect(() => {
		setUserError(error);
	}, [error]);


	const handlePassword = () => {
		if (!login || !password) {
			setUserError(true);
			return;
		};
		dispatch(loginOrCreateUser({ uEmail: login, uPassword: password, isNewUser: true }));
		if (isAuth) navigate(paths.todos);
	};

	return (
		<>
			{loading && <Loader />}
			<AuthLayout>
				<Wrapper>
					<CustomInput type='text' placeholder='Login' value={login} onChange={changeLogin} />
					<CustomInput type='password' placeholder='Password' value={password} onChange={changePassword} />
					{userError && <Error />}
					<Button width='100%' onClick={handlePassword}>Sign Up</Button>
				</Wrapper>
			</AuthLayout>
		</>
	);
};

export default SignPage;
