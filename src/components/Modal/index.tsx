import { FC } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as CloseIco } from 'static/img/close.svg';

import { Content, Ico, Overlay, Root, Wrapper } from './StyledModal';
import { IProps } from './types';



const Template: FC<IProps> = ({ children, onClose, ...props }) => {
	return (
		<Wrapper >
			<Overlay onClick={onClose} />
			<Root>
				<Ico><CloseIco onClick={onClose} /></Ico>
				<Content {...props}>
					{children}
				</Content>
			</Root>
		</Wrapper>
	);
};

const Modal: FC<IProps> = (props) => {
	if (!props.open) return null;

	return createPortal(<Template {...props} />, document.body);
};
export default Modal;
