import { put as dispatch, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* projectSaga () {
    yield takeEvery ('FETCH_INFO', fetchInfo);
}

function* fetchInfo() {
    console.log('fetchInfo was hit');
    try {
        const infoResponse = yield axios.get('/info');
        yield dispatch({ type: 'GET_INFO', payload: infoResponse.data })
    } catch (error) {
        console.log('Error with your fetch');
    }
}



export default projectSaga;