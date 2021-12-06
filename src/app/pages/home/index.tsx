

import { FormAddTodo } from "app/components/atomic/organisms"
import { Card, Loader, Modal } from "app/components/interface"

import { DefaultLayout } from "app/components/layout"
import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TypeCheckState } from "utils/interface"





export const Home = () => {
    const dispatch = useDispatch()
    const { data, message, isLoading } = useSelector((state: TypeCheckState) => state.TodoReducer)

    let [isOpen, setIsOpen] = useState(false)

    const closeModal = useCallback(() => setIsOpen(false), [])
    const openModal = useCallback(() => setIsOpen(true), [])


    useEffect(() => {
        dispatch({ type: "TRY_TODO" })
    }, [dispatch])


    return (
        <DefaultLayout>
            <Modal
                withButton={true}
                titleButton="Create Todo"
                openModal={openModal}
                styleButton="px-2 py-2 bg-green-200 rounded dark:text-white dark:bg-gray-400"
                closeModal={closeModal}
                isOpen={isOpen}
            >
                <FormAddTodo />
            </Modal>
            {isLoading ? <Loader /> : <Card title="Data Todo" subtitle={message} data={data} />
            }

        </DefaultLayout>
    )
}
