import { FC } from 'react';
import styled from 'styled-components';

import SetupRoutes from '../routes/index';

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
			<SetupRoutes />
		</AppWrapper>
	);
};

export default App;
