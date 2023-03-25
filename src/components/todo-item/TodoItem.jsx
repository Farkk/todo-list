import CheckBox from '../items/checkBox/CheckBox';
import {BsTrash} from 'react-icons/bs'



const TodoItem = ({ todo, changeTodo, removeTodo }) => {
	return (
		<div 
		className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-3/5 mx-auto'>
			<button onClick={() => changeTodo(todo._id)} className='flex items-center'>
				<CheckBox isCompleted={todo.isCompleted}/>
				<span className={todo.isCompleted ? 'line-through' : ''}>{todo.title}</span>
			</button>

			<button onClick={() => removeTodo(todo._id)}>
				<BsTrash size={22}
				 className='text-gray-500
				  hover:text-pink-900 transition-colors ease-in-out duration-300'/>
			</button>
		</div>
	)
};

export default TodoItem;