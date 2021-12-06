import axios, { AxiosRequestConfig, AxiosResponse, AxiosStatic } from "axios";


// const { REACT_APP_BASE_URL } = process.env
let instance: AxiosStatic = axios;

const initialHeader = {
    "Content-Type": "application/json",
    Authorization: ""
};

export function setUpAxios() {
    instance.interceptors.request.use((req: AxiosRequestConfig) => {

        console.log('axios request')
        return req;
    });
    instance.interceptors.response.use((res: AxiosResponse) => {

        // console.log(res)

        return res;
    }, (err) => {
        console.log(err)

        return Promise.reject(err)
    })
}


export default function HttpRequest(config: AxiosRequestConfig) {

    const baseURL = `https://virtserver.swaggerhub.com/`;

    const headers = {
        ...initialHeader,
    };

    const token = "";
    headers.Authorization = `Bearer ${token}`;

    const finalConfig = {
        baseURL,
        headers,
        ...config,
    };
    // RETURN AXIOS
    return instance.request(finalConfig);
}