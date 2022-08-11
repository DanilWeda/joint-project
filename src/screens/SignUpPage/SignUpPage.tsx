import Button from 'components/Button';
import CustomInput from 'components/CustomInput';
import Error from 'components/ErrorToast';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useForm } from 'hooks/useForm';
import AuthLayout from 'Layout/Auth';
import { IUser } from 'models/IUser';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from 'routes/index';
import { setUser } from 'store/slices/userSlice/userSlice';

import { Wrapper } from './StyledSignUpPage';

const SignPage: FC = () => {
	const { login, password, changeLogin, changePassword } = useForm();
	const [error, setError] = useState(false);

	const dispatch = useAppDispatch();
	const auth = getAuth();
	const navigate = useNavigate();

	useEffect(() => {
		setError(false);
	}, [login, password]);


	const handlePassword = (email: string, password: string) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				// @ts-ignore
				const { email, uid, accessToken } = user;

				const tmpUser: IUser = {
					email,
					id: uid,
					token: accessToken,
				};
				dispatch(setUser(tmpUser));
				navigate(paths.todos);
			})
			.catch(e => setError(true));
	};

	return (
		<AuthLayout>
			<Wrapper>
				<CustomInput type='text' placeholder='Login' value={login} onChange={changeLogin} />
				<CustomInput type='password' placeholder='Password' value={password} onChange={changePassword} />
				{error && <Error />}
				<Button width='100%' onClick={() => handlePassword(login, password)}>Sign Up</Button>
			</Wrapper>
		</AuthLayout>
	);
};

export default SignPage;
