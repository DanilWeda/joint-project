import { FC } from 'react';
import { Link } from 'react-router-dom';

import { StyledButton, Wrapper } from './StyledButton';
import { IProps } from './types';

const Button: FC<IProps> = ({ children, link, onClick, ...props }) => {

	return (
		<Wrapper>
			{link ? (
				<Link to={link}>
					<StyledButton onClick={onClick} {...props} >
						{children}
					</StyledButton >
				</Link>
			) : (
				<StyledButton onClick={onClick} {...props} >
					{children}
				</StyledButton >
			)}
		</Wrapper>

	);
};
export default Button;
