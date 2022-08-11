import { ChangeEvent, FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { ReactComponent as Check } from 'static/img/check.svg';
import { ReactComponent as Dump } from 'static/img/dump.svg';
import { ReactComponent as Pen } from 'static/img/pen.svg';

import { CheckButton, IconButton, IconWrapper, Input, InputWrapper, Wrapper } from './StyledCustomInput';
import { IProps } from './types';


const CustomInput: FC<IProps> = ({ value, completed, id, onChange }) => {
	const [isComplete, setIsComplete] = useState(completed);
	const [text, setText] = useState(value);
	const editRef = useRef<HTMLInputElement>(null);


	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	const checkHandler = (e: MouseEvent<HTMLButtonElement>) => {
		setIsComplete(!isComplete);
	};

	const handleEditClick = () => {
		editRef.current?.focus();
	};

	useEffect(() => {
		onChange({ text, completed: isComplete, id });

		// eslint-disable-next-line
	}, [text, isComplete]);

	return (
		<Wrapper>
			<CheckButton onClick={(e) => checkHandler(e)} >{isComplete ? <Check /> : ''}</CheckButton>
			<InputWrapper>
				<Input ref={editRef} onChange={changeHandler} value={text} placeholder="Type your task..." />
				<IconWrapper>
					<IconButton><Pen onClick={handleEditClick} /></IconButton>
					<IconButton><Dump /></IconButton>
				</IconWrapper>
			</InputWrapper>
		</Wrapper>

	);
};
export default CustomInput;