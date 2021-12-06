import { useLocation } from "react-router";

const useQueryString = () => {
    const list = useLocation();
    const stateParams: any = list.state
    const routeCurrent: any = list.pathname
    let queryStringArray: Array<any> = []


    let listQueryString: object;
    new URLSearchParams(list.search).forEach((value, key) => {
        listQueryString = {
            value,
            key
        }
        queryStringArray.push(listQueryString)
    })


    return {
        queryString: queryStringArray,
        stateParams,
        routeCurrent
    }
}

export default useQueryString;
