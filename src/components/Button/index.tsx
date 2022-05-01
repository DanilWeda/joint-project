import { FC } from 'react';
import { Link } from 'react-router-dom';

import { StyledButton } from './StyledButton';
import { IProps } from './types';

const Button: FC<IProps> = ({ children, link, ...props }) => {

	return (

		<Link to={link}>
			<StyledButton {...props} >
				{children}
			</StyledButton >
		</Link>

	);
};
export default Button;
