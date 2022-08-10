import { ITodo } from 'models/ITodo';

export interface IProps {
	id: string;
	value: string;
	completed: boolean;
	onChange(todo: Omit<ITodo, 'uid'>): void;
}