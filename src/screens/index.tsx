import { FC } from 'react';
import SetupRoutes from 'routes/index';
import styled from 'styled-components';

const AppWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const App: FC = () => {
	return (
		<AppWrapper>
			<SetupRoutes />
		</AppWrapper>
	);
};

export default App;
