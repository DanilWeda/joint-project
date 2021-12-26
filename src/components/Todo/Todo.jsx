import React, { useState } from 'react'
import { TodoItem, TodoWrapper } from './Todo.style'

const Todo = () => {
	const [status, setStatus] = useState(false)

	return (
		<TodoWrapper>
			<button>Status</button>
			<TodoItem>
				<p className="text">Lorem ipsum dolor sit amet.</p>
				<button className='edit'>!</button>
				<button className='delete'>#</button>
			</TodoItem>
		</TodoWrapper>
	)
}

export default Todo
