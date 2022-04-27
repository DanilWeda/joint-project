import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import LoginPage from './LoginPage/LoginPage';
import NewUserPage from './NewUserPage/NewUserPage';
import SingUpPage from './SignUpPage/SignUpPage';

const AppWrapper = styled.div`
  box-sizing: border-box;
  min-width: 100vh;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30vh;
`;

const App: FC = () => {
	return (
		<AppWrapper>
			<Routes>
				<Route path='/' element={<NewUserPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/singup' element={<SingUpPage />} />
				<Route path='*' element={<NewUserPage />} />
			</Routes>
		</AppWrapper>
	);
};

export default App;
