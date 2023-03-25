import { useState } from 'react';
const TodoField = ({ setTodos }) => {

	const [inputValue, setInputValue] = useState('');

	const addTodo = (title) => {
		setTodos(prev => [
		{
			_id: new Date(),
			title,
			isCompleted: false
		},...prev])
		setInputValue('')
	}

	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl  border-zinc-700 border-2 px-5 py-2 w-3/5 mx-auto mt-5'>
			<input 
				type="text"
				placeholder='Что хотите сделать сегодня?'
				onChange={e => inputValue.length < 40 ? setInputValue(e.target.value) : alert('Максимальное количество символов')}
				value={inputValue}
				onKeyDown={e => e.key === 'Enter' && addTodo(inputValue)}
				className='bg-transparent w-full border-none outline-none' />
		</div>
	)

};

export default TodoField;

