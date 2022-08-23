import Modal from 'components/Modal';
import { FC, useState } from 'react';
import { ReactComponent as ConfirmIco } from 'static/img/confirmArrow.svg';
import { ReactComponent as Logo } from 'static/img/logo.svg';

import { BtnWrapper, Button, Checkbox, ConfirmHideWrapper, Paragraph, Subtext, Title, Wrapper } from './StyledRemovePopup';
import { IProps } from './types';


const RemovePopup: FC<IProps> = ({ open, onClose, onRemove }) => {
	const [confirmHide, setConfirmHide] = useState(false);

	const confirmHandler = () => {
		setConfirmHide(!confirmHide);
	};

	return (
		<Modal open={open} onClose={onClose}>
			<Wrapper>
				<Logo />
				<Title>{'DELETE TASK'}</Title>
				<Paragraph>Are you sure to remove this task?</Paragraph>
				<ConfirmHideWrapper>
					<Checkbox onClick={confirmHandler}>
						{confirmHide &&
							<ConfirmIco
								style={{
									width: '15px',
									height: '13px',
									padding: 0,
									position: 'absolute',
									top: -3,
									left: 2,
									backgroundColor: '#fff',
								}} />
						}
					</Checkbox>
					<Subtext>Do not show it anymore</Subtext>
				</ConfirmHideWrapper>
				<BtnWrapper>
					<Button onClick={onClose} color="cancel">Cancel</Button>
					<Button onClick={onRemove}>{'Remove'}</Button>
				</BtnWrapper>
			</Wrapper>
		</Modal>
	);
};

export default RemovePopup;