import React, { useState } from 'react'

export const TaskContext = React.createContext([]);

const TaskProvider = ({ children }) => {
    const [taskList, setTaskList] = useState([]);
    return (
        <TaskContext.Provider value={[taskList, setTaskList]}>
            { children }
        </TaskContext.Provider>

    );

};

export default TaskProvider;