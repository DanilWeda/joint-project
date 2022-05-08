import { ReactNode } from 'react';

export interface IProps {
	children: ReactNode;
	link?: string;
	width?: string;
	onClick?: () => void;
}
