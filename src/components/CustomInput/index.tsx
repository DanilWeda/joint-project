import { FC } from 'react';

import { Input } from './StyledCustomInput';
import { IProps } from './types';


const CustomInput: FC<IProps> = ({ placeholder, type }) => {
	return (
		<Input placeholder={placeholder} type={type} />
	);
};
export default CustomInput;