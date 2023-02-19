import React, { useReducer, useState } from 'react'
import { actions, initialState, taskReducer } from '../../store';

export const TaskContext = React.createContext([]);

const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);
    const value = {
        taskList: state.taskList,
        addTask: (taskID, taskName) => {
            dispatch({ type: actions.ADD_TASK, id: taskID, name: taskName });
        },
        deleteTask: (taskID) => {
            dispatch({ type: actions.DELETE_TASK, id: taskID});
        }
    };

    return (
        <TaskContext.Provider value={value}>
            { children }
        </TaskContext.Provider>

    );

};

export default TaskProvider;