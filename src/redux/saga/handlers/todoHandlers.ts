import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects'
import { setData, setError, setLoading } from 'redux/modules/todo/action';
import { getTodo } from 'service/gettodo'


interface TypeCheckData {
    data: {
        id: number,
        title: String,
        description: String,
        status: number,
        createdAt: string
    }
}




function* handleTodo() {
    try {
        yield put(setLoading())
        const response: AxiosResponse<TypeCheckData> = yield call(getTodo)
        if (response.status === 200) {
            yield put(setData(response.data))
        } else {
            console.log('gagal get todo')
        }
    } catch (e) {
        yield put(setError())
    }
}


export {
    handleTodo,
}