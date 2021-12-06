
import { IS_ERROR, IS_LOADING, IS_RESPONSE, SET_DELETE_DATA, SET_NEW_DATA, SET_UPDATE_DATA, TRY_TODO } from './initialconst'

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    message: ""
};

type Action = any;


export default function reducer(state = initialState, actions: Action) {

    switch (actions.type) {

        case TRY_TODO:
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: false,
                message: "Permintaan Sedang Di Proses, Mohon Tunggu Sebentar"
            }
        case IS_RESPONSE:
            return {
                ...state,
                data: actions.payload.sort(),
                isLoading: false,
                isError: false,
                message: "Data Berhasil Ditampilkan"
            }
        case IS_LOADING:
            return {
                ...state,
                data: [],
                isLoading: true,
                isError: false,
                message: "Permintaan Sedang Di Proses, Mohon Tunggu Sebentar"
            }
        case IS_ERROR:
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: true,
                message: "Mohon maaf terjadi kesalahan, silahkan ulangi permintaan anda"
            }
        case SET_NEW_DATA:
            return {
                ...state,
                data: actions.payload,
                isLoading: false,
                isError: true,
                showModal: false,
                message: "Berhasil Menambahkan Data"
            }
        case SET_UPDATE_DATA:
            const dataupdate = actions.payload
            const updateData = state.data.map((value) => {
                if (value['id'] === dataupdate['id']) {
                    return dataupdate
                }
                return value
            })

            return {
                ...state,
                data: updateData,
                isLoading: false,
                isError: true,
                showModal: false,
                message: "Berhasil Update Data"
            }
        case SET_DELETE_DATA:
            const id = actions.payload
            return {
                ...state,
                data: state.data.filter((value) => value['id'] !== id),
                isLoading: false,
                isError: true,
                showModal: false,
                message: "Berhasil Delete Data"
            }
        default:
            return state;
    }
}
