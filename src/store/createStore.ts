//Store
import {configureStore} from '@reduxjs/toolkit';

//Reducers
import {videos} from 'store/reducers';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import {promiseMiddleware} from 'redux-saga-promise-actions';
import {all} from 'redux-saga/effects';

//Sagas
import {saga as videosSaga} from 'store/sagas/videos';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {videos},
    middleware: [promiseMiddleware, sagaMiddleware],
    devTools: true
});

export default store;

function* saga() {
    yield all([...videosSaga]);
}

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
