import { IS_ERROR, IS_LOADING, IS_RESPONSE, SET_DELETE_DATA, SET_NEW_DATA, SET_UPDATE_DATA, TRY_TODO } from "./initialconst"


const getTodo = () => {
    return {
        type: TRY_TODO,
    }
}

const setData = (payload: any) => {
    return {
        type: IS_RESPONSE,
        payload: payload
    }
}

const addData = (payload: any) => {
    return {
        type: SET_NEW_DATA,
        payload: payload
    }
}
const updateData = (payload: any) => {
    return {
        type: SET_UPDATE_DATA,
        payload: payload
    }
}
const deleteData = (payload: any) => {
    return {
        type: SET_DELETE_DATA,
        payload: payload
    }
}

const setError = () => {
    return {
        type: IS_ERROR,
    }
}
const setLoading = () => {
    return {
        type: IS_LOADING,
    }
}

export {
    getTodo,
    setData,
    setError,
    setLoading,
    deleteData,
    addData,
    updateData
}