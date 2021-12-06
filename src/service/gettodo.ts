import HttpRequest from "service";

export const getTodo = async () => {

    try {
        const response = await HttpRequest({
            method: "GET",
            url: "hanabyan/todo/1.0.0/to-do-list"
        })

        return response

    } catch (error: any) {
        return "ERROR"
    }


}