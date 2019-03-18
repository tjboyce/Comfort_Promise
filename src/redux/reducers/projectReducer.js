const projectReducer = (state = [], action) => {
    console.log('projectReducer was hit', action);

    switch (action.type) {
        case 'GET_INFO':
            return action.payload
        default:
            return state;
    }
};
export default projectReducer;