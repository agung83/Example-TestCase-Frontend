export interface TypeCheckState {
    TodoReducer: {
        data: {
            id: number,
            title: String,
            description: String,
            status: number,
            createdAt: string
        }[];
        isLoading: boolean;
        isError: boolean;
        message: string
        showModal: boolean
    }
}