import { ReactComponent as InfoIco } from 'static/img/info.svg';

import { ErrorText, ErrorWrapper } from './StyledErrorToast';

const Error = () => {
	return (
		<ErrorWrapper>
			<InfoIco />
			<ErrorText>Oops! Login or password you entered is incorrect.</ErrorText>
		</ErrorWrapper>
	);
};
export default Error;