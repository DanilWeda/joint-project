import styled from 'styled-components';

import Btn from '../../UI/MainBtn';
import MainInput from '../../UI/MainInput';
import Logo from '../../UI/MainLogo';
import Title from '../../UI/MainTitle';

const StyledMainBorder = styled.div`
  width: 700px;
  height: 460px;
  border: 1px solid ${({ color }) => color || '#000'};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PositionInput = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 360px;
  input:not(:last-child) {
    margin-bottom: 10px;
  }
  a {
    width: 100%;
  }
`;

const MainBorderLogin = () => {
	return (
		<StyledMainBorder>
			<Logo />
			<Title>TODO APP</Title>
			<PositionInput>
				<MainInput type={'email'} placeholder={'email'} height={'60px'} />
				<MainInput type={'password'} placeholder={'password'} height={'60px'} />
				<Btn height={'60px'} link={'/'}>
					Log In
				</Btn>
			</PositionInput>
		</StyledMainBorder>
	);
};

export default MainBorderLogin;
