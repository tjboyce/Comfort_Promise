const feedbackReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_FEEDBACK':
            return action.payload
        default:
            return state;
    }
};
export default feedbackReducer;