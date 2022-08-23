import { ITodo } from 'models/ITodo';

export interface IProps {
	id: string;
	value: string;
	completed: boolean;
	onEdit(todo: Omit<ITodo, 'uid'>): void;
	completedSwitcher(id: string, status: boolean): void;
	onRemove(id: string): () => void;
}