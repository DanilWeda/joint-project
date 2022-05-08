import { ChangeEvent, FC } from 'react';

import { Input } from './StyledCustomInput';
import { IProps } from './types';


const CustomInput: FC<IProps> = ({ placeholder, type, value, onChange }) => {

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<Input placeholder={placeholder} type={type} value={value} onChange={changeHandler} />
	);
};
export default CustomInput;