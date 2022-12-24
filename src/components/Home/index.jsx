import React, { useContext, useState } from 'react'
import { TaskContext } from '../../contexts/TaskProvider';
import { Button, InputField } from '../user_interface';
import './Home.scss';

const Home = () => {
    const [taskList, setTaskList] = useContext(TaskContext);
    const [value, setValue] = useState();
    return (
        <div className='home-wrapper'>
            <InputField type="search"
                        label="Task name"
                        placeholder="Task name"
                        value={value}
                        onChange={e => setValue(e.target.value)} />
            <Button primary>Create Task</Button>
        </div>
    );

};

export default Home;