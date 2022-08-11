import { FC } from 'react';
import { createPortal } from 'react-dom';

import { Wrapper } from './StyledLoader';

const TemplateLoader: FC = () => {
	return (
		<Wrapper>
			Loading...
		</Wrapper>

	);
};

const Loader: FC = () => {
	return createPortal(<TemplateLoader />, document.body);

};
export default Loader;