import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import { watcherSaga } from './saga/rootsaga'

export function configurasiStore() {

    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    const store = configureStore({
        reducer: reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
    })
    sagaMiddleware.run(watcherSaga)
    return store
}