import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen, faCalendarDays, faTrash } from '@fortawesome/free-solid-svg-icons';


import { TaskContext } from '../../contexts/TaskProvider';
import { Button, InputField } from '../user_interface';
import './Home.scss';

const Home = () => {
    const [value, setValue] = useState('');
    const { taskList, addTask } = useContext(TaskContext);
    const addTaskHandler = () => {
        if (value.length === 0) {
            return;
        }

        addTask(taskList.length + 1, value);
        setValue('');
    };

    return (
        <div className='home-wrapper'>
            <InputField type="search"
                        label="Task name"
                        placeholder="Task name"
                        value={value}
                        onChange={e => setValue(e.target.value)} />
            <Button primary onClick={ addTaskHandler }>Create Task</Button>
            <div className='cards'>
            { taskList.map(task => (
                    <Task key={task.id} task={task} />
                ))
            }
            </div>
        </div>
    );

};

const Task = ({ task }) => {
    const { deleteTask } = useContext(TaskContext);
    const [displayValue, setDisplayValue] = useState('none');
    return (
        <div className='card'
             onMouseOver={() => setDisplayValue('block')}
             onMouseOut={() => setDisplayValue('none')}>
            <h3>{ task.name }</h3>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className='options' style={{display: displayValue,
                                             maxHeight: 0 }}>
                <span style={{color: '#F4B400'}}><FontAwesomeIcon icon={ faFilePen } size="xs"/></span>
                <span style={{color: 'white'}}><FontAwesomeIcon icon={ faCalendarDays } size="xs"/></span>
                <span style={{color: '#DB4437'}} onClick={() => deleteTask(task.id) }><FontAwesomeIcon icon={ faTrash } size="xs"/></span>
            </div>
        </div>
    );
};

export default Home;