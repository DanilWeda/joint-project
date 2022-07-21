import { FC } from 'react';
import styled from 'styled-components';

import SetupRoutes from '../routes/index';

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
