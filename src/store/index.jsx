
export const actions = {
    ADD_TASK: 'ADD_TODO_TASK'
};

export const initialState = { taskList: [ { id: 1, name: 'Learn Java' }, 
                                          { id: 2, name: 'Learn Docker'},
                                          { id: 3, name: 'Learn AWS'},
                                          { id: 4, name: 'Learn Kafka'}] };

export const taskReducer = (state, action ) => {
    switch(action.type) {
        case actions.ADD_TASK:
            return  { taskList: [ ...state.taskList, 
                                 { id: actions.id, name: action.name, isComplete: false } ] };
        default:
            return state;
    };
}
