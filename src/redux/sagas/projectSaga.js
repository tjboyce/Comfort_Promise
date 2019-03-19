import { put as dispatch, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* projectSaga () {
    yield takeEvery ('FETCH_INFO', fetchInfo);
    yield takeEvery ('FETCH_FEEDBACK', fetchFeedback)
    yield takeEvery ('ADD_FEEDBACK', postFeedback)
}

function* fetchInfo() {
    console.log('fetchInfo was hit');
    try {
        const infoResponse = yield axios.get('/api/info');
        yield dispatch({ type: 'GET_INFO', payload: infoResponse.data })
    } catch (error) {
        console.log('saga Error with your fetch info');
    }
}

function* fetchFeedback (){
    console.log('fetchInfo was hit');
    try {
        const feedbackResponse = yield axios.get('/api/feedback');
        yield dispatch({ type: 'GET_INFO', payload: feedbackResponse.data })
    } catch (error) {
        console.log('saga error with your fetch feedback');
    }
}


function* postFeedback(action) {
    try {
        console.log('postFeedback', action.payload);
        yield axios.post('api/feedback', action.payload);
        yield dispatch({ type: 'FETCH_FEEDBACK' });
    } catch (error) {
        console.log('post Saga error', error);
    }
}

export default projectSaga;