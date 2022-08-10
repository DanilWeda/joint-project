import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useForm } from '../../hooks/useForm';
import AuthLayout from '../../Layout/Auth';
import { IUser } from '../../models/IUser';
import { paths } from '../../routes/index';
import { setUser } from '../../store/slices/userSlice/userSlice';
import { Wrapper } from './StyledLoginPage';


const LoginPage: FC = () => {
	const { login, password, changeLogin, changePassword } = useForm();
	const dispatch = useAppDispatch();
	const auth = getAuth();
	const navigate = useNavigate();


	const handleLogin = (email: string, password: string) => {
		signInWithEmailAndPassword(auth, email, password)
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
			.catch((error: any) => console.log);
	};

	return (
		<>
			<AuthLayout>
				<Wrapper>
					<CustomInput type='text' placeholder='Login' value={login} onChange={changeLogin} />
					<CustomInput type='password' placeholder='Password' value={password} onChange={changePassword} />
					<Button width='100%' onClick={() => handleLogin(login, password)} >Login</Button>
				</Wrapper>
			</AuthLayout >
		</>
	);
};

export default LoginPage;
