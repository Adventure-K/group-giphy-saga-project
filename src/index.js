import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
//imports to added to project
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';



//saga middleware to run saga and saga logger
const sagaMiddleware = createSagaMiddleware();

function* fetchResult() {
  
    try{
        let response = yield axios.get('/api/giphy');
        console.log(response.data);
        yield put ({type: 'GET_RESULT', payload: response.data})
    } catch (err) {
        console.error('GET search results not working');
    }
};

function* addFavorite(action) {
    try{
        yield axios.post('/api/favorite', action.payload);
        yield put ({type: 'FETCH_RESULT'})
    } catch (err) {
        console.error('POST not working');
    }
};


function* fetchFavorite() {
    try{
        let response = yield axios.get('/api/favorite');
        yield put ({type: 'FETCH_FAVORITE', payload: response.data})
    } catch(err) {
        console.error('GET favorites not working');
    }
};



function* watcherSaga(){
    yield takeEvery('FETCH_RESULT', fetchResult);
    yield takeEvery('NEW_FAVORITE', addFavorite);
    yield takeEvery('FETCH_FAVORITE', fetchFavorite);
}

// reducer for search results
const resultReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_RESULT':
            return action.payload.data
        default:
            return state;
    }
}




// store instance
const store = createStore(
    combineReducers({
        resultReducer,
    }),
    applyMiddleware(logger, sagaMiddleware)
);



// saga to run watcher
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
