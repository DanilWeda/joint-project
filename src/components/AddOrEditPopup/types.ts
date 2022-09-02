import { ReactNode } from 'react';

export interface IProps {
	open: boolean;
	isEdit?: boolean;
	children?: ReactNode;
	value?: string;
	onClose(): void;
	onChange(str: string): void;
	onCreate?(): void;
	onEdit?(): void;
}