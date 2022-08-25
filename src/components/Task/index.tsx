import AddOrEditPopup from 'components/AddOrEditPopup';
import RemovePopup from 'components/RemovePopup';
import { ITodo } from 'models/ITodo';
import { FC, useEffect, useState } from 'react';
import { ReactComponent as Check } from 'static/img/check.svg';
import { ReactComponent as Dump } from 'static/img/dump.svg';
import { ReactComponent as Pen } from 'static/img/pen.svg';

import { CheckButton, IconButton, IconWrapper, Input, InputWrapper, Wrapper } from './StyledCustomInput';
import { IProps } from './types';


const Task: FC<IProps> = ({ value, completed, id, onEdit, completedSwitcher, onRemove }) => {
	const [isComplete, setIsComplete] = useState(completed);
	const [openPopup, setOpenPopup] = useState(false);
	const [openRemovePopup, setOpenRemovePopup] = useState(false);
	const [changedTask, setChangedTask] = useState<Omit<ITodo, 'uid'>>({ completed, text: value, id });

	const removeItem = onRemove(id);

	const checkHandler = () => {
		setIsComplete(!isComplete);
	};

	const handleEditClick = () => {
		setOpenPopup(true);
	};

	const handleCloseEditClick = () => {
		setOpenPopup(false);
	};

	const handleEditChange = (changedText: string) => {
		setChangedTask(oldTask => ({ ...oldTask, text: changedText }));
	};

	const handleUpdateClick = () => {
		onEdit(changedTask);
	};


	const handleOpenRemoveClick = () => {
		if (!window.localStorage.getItem('hideremove')) {
			setOpenRemovePopup(true);
			return;
		}
		removeItem();
	};


	const handleCloseRemoveClick = () => {
		setOpenRemovePopup(false);
	};

	useEffect(() => {
		completedSwitcher(id, isComplete);
	}, [isComplete]);

	return (
		<>
			<AddOrEditPopup
				isEdit={true}
				value={value}
				onChange={handleEditChange}
				open={openPopup}
				onClose={handleCloseEditClick}
				onEdit={handleUpdateClick}
			/>
			<RemovePopup onRemove={removeItem} open={openRemovePopup} onClose={handleCloseRemoveClick} />
			<Wrapper>
				<CheckButton onClick={checkHandler} >{isComplete ? <Check /> : ''}</CheckButton>
				<InputWrapper>
					<Input defaultValue={value} placeholder="Type your task..." />
					<IconWrapper>
						<IconButton><Pen onClick={handleEditClick} /></IconButton>
						<IconButton><Dump onClick={handleOpenRemoveClick} /></IconButton>
					</IconWrapper>
				</InputWrapper>
			</Wrapper>
		</>
	);
};

export default Task;