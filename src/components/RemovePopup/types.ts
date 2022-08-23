import { ReactNode } from 'react';

export interface IProps {
	open: boolean;
	children?: ReactNode;
	onClose(): void;
	onRemove(): void;
}