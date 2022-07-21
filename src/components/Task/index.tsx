import { ChangeEvent, FC, MouseEvent, useState } from 'react';

import { ReactComponent as Check } from '../../static/img/check.svg';
import { ReactComponent as Dump } from '../../static/img/dump.svg';
import { ReactComponent as Pen } from '../../static/img/pen.svg';
import { CheckButton, IconButton, IconWrapper, Input, InputWrapper, Wrapper } from './StyledCustomInput';
import { IProps } from './types';


const CustomInput: FC<IProps> = () => {
	const [isComplete, setIsComplete] = useState(false);
	const [text, setText] = useState('');


	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	const checkHandler = (e: MouseEvent<HTMLButtonElement>) => {
		setIsComplete(!isComplete);
	};

	return (
		<Wrapper>
			<CheckButton onClick={(e) => checkHandler(e)} >{isComplete ? <Check /> : ''}</CheckButton>
			<InputWrapper>
				<Input onChange={(e) => changeHandler(e)} value={text} placeholder="Type your task..." />
				<IconWrapper>
					<IconButton><Pen /></IconButton>
					<IconButton><Dump /></IconButton>
				</IconWrapper>
			</InputWrapper>
		</Wrapper>

	);
};
export default CustomInput;