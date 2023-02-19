
export const actions = {
    ADD_TASK: 'ADD_TODO_TASK',
    DELETE_TASK: 'DELETE'
};

export const initialState = { taskList: [ { id: 1, name: 'Learn Java', isComplete: false }, 
                                          { id: 2, name: 'Learn Docker', isComplete: false},
                                          { id: 3, name: 'Learn AWS', isComplete: false},
                                          { id: 4, name: 'Learn Kafka', isComplete: false}] };

export const taskReducer = (state, action ) => {
    switch(action.type) {
        case actions.ADD_TASK:
            return  { taskList: [ ...state.taskList, 
                                 { id: action.id, name: action.name, isComplete: false } ] };
        case actions.DELETE_TASK:
            return { taskList: [... state.taskList.filter(v => v.id !== action.id )] };

        default:
            return state;
    };
}
