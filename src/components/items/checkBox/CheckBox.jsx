import {BsCheck} from 'react-icons/bs';

const CheckBox = ({isCompleted}) => {
	return (
		<div className={`border-2 rounded-md border-pink-400 
				${isCompleted ? 'bg-pink-400' : ''}
				 w-6 h-6 mr-3 flex items-center justify-center`}
			>
			{isCompleted &&
				<BsCheck size={24} className='text-gray-900'/>
			}
		</div>
	)

};

export default CheckBox;

