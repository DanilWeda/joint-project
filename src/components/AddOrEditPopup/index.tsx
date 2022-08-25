import Modal from 'components/Modal';
import { ChangeEvent, FC, useState } from 'react';
import { ReactComponent as EditIco } from 'static/img/edit.svg';
import { ReactComponent as Logo } from 'static/img/logo.svg';

import { BtnWrapper, Button, Input, InputWrapper, Title, Wrapper } from './StyledAddOrEditPopup';
import { IProps } from './types';


const AddOrEditPopup: FC<IProps> = ({ open, onClose, onChange, onCreate, value, onEdit, isEdit = false }) => {
	const [text, setText] = useState(value || '');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
		onChange(e.target.value);
	};

	const handleAgreeClick = () => {
		if (isEdit) {
			onEdit!();
			return;
		} else {
			onCreate!();
			setText('');
			onChange('');
		}
		onClose();
	};

	const handleCancelClick = () => {
		onClose();
		setText('');
		onChange('');
	};


	return (
		<Modal open={open} onClose={onClose}>
			<Wrapper>
				<Logo />
				<Title>{isEdit ? 'Edit Task' : 'ADD TASK'}</Title>
				<InputWrapper >
					<EditIco />
					<Input type='text' value={text} onChange={handleChange} placeholder={'Write your task...'} />
				</InputWrapper>
				<BtnWrapper>
					<Button onClick={handleCancelClick} color="cancel">Cancel</Button>
					<Button onClick={handleAgreeClick}>{isEdit ? 'Edit' : 'Add'}</Button>
				</BtnWrapper>
			</Wrapper>
		</Modal>
	);
};
export default AddOrEditPopup;