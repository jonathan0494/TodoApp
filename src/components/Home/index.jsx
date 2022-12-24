import React, { useContext, useState } from 'react'
import { TaskContext } from '../../contexts/TaskProvider';
import { Button, InputField } from '../user_interface';
import './Home.scss';

const Home = () => {
    const [value, setValue] = useState();
    const { taskList, addTask } = useContext(TaskContext);
    const addTaskHandler = () => {
        addTask(taskList.length, value);
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
            <ul>
                { taskList.map((task, i) => (
                    <li key={i}>{ task.name }</li>
                ))}
            </ul>
        </div>
    );

};

export default Home;