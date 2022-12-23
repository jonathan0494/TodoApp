import React, { useState } from 'react'
import { Button, InputField } from '../user_interface';
import './Home.scss';

const Home = () => {
    const [task, setTask] = useState();
    return (
        <div className='home-wrapper'>
            <InputField type="search"
                        label="Task name"
                        placeholder="Task name"
                        value={task}
                        onChange={e => setTask(e.target.value)} />
            <Button primary>Create Task</Button>
        </div>
    );

};

export default Home;