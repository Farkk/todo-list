import { useState } from 'react';
import TodoItem from '../todo-item/TodoItem';
import TodoField from '../todoField/TodoField';


const App = () => {
	const [todos, setTodos] = useState([]);

	const changeTodo = (id) => {
		const newArr = [...todos];
		const current = newArr.find(todo => todo._id === id);
		current.isCompleted = !current.isCompleted
		setTodos(newArr)
	}

	const removeTodo = (id) => {
		setTodos([...todos].filter(t => t._id !== id))
	}
	
	return (
		<div className='w-2/5 mx-auto text-white'>
			<h1 className='text-2xl font-bold text-center mb-10'>Todo List</h1>

			{
				todos.map(todo => {
					return (
						<TodoItem 
						key={todo._id}
						todo={todo}
						changeTodo={changeTodo}
						removeTodo={removeTodo}/>
					)
				})

			}

			<TodoField setTodos={setTodos}/>
		</div>
	)
}


export default App;