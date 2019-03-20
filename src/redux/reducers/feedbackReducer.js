const feedbackReducer = (state = [], action) => {
    console.log('feedbackReducer was hit', action);

    switch (action.type) {
        case 'GET_FEEDBACK':
            return action.payload
        default:
            return state;
    }
};
export default feedbackReducer;