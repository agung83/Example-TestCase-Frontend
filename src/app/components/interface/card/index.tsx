import { FormAddTodo } from "app/components/atomic/organisms"
import { useState, useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from "../modal"



interface typeCard {
    title: string,
    subtitle: string
    data: {
        id: number,
        title: String,
        description: String,
        status: number,
        createdAt: string
    }[]
}

interface TypeDetail {
    id: number,
    title: string,
    description: string,
    status: number,
    createdAt: string
}

interface typeS {
    TodoReducer: {
        showModal: boolean
    }
}


export const CardBerita = ({ data, title, subtitle }: typeCard) => {
    const dispatch = useDispatch();
    let [isOpen, setIsOpen] = useState(false)
    let [isOpenEdit, setIsOpenEdit] = useState(false)
    let [detail, setDetail] = useState<TypeDetail>({} as any)

    const { showModal } = useSelector((state: typeS) => state.TodoReducer)
    const closeModal = useCallback(() => setIsOpen(false), [])

    useEffect(() => {
        if (!showModal) {

            closeModal()
        }
    }, [showModal, closeModal])



    const DetailBerita = (detail: TypeDetail | any) => {
        setIsOpen(true)
        console.log(detail)
        setDetail(detail)
    }

    const setFormUpdate = () => {
        isOpenEdit ? setIsOpenEdit(false) : setIsOpenEdit(true)
    }



    console.log(isOpen)

    return (
        <>
            <div className="p-5   mb-5  dark:bg-gray-800">
                <section className="container py-5  mb-10  rounded-3xl dark:bg-gray-800">
                    <div className=" mx-auto sm:px-6 lg:px-8">
                        <div className="lg:text-center text-center ">
                            <p className="mt-2 text-xl leading-5 font-extrabold tracking-tight text-green-500  sm:text-4xl dark:text-white">
                                {title}
                            </p>
                            <p className="mt-4 mb-5 max-w-2xl text-xl text-gray-500 lg:mx-auto dark:text-white">
                                {subtitle}
                            </p>
                        </div>
                        <div className=" bg-white dark:bg-gray-600">

                            {
                                data.map((pecah, key) => (
                                    <article key={key} className={`space-y-4 shadow-sm mb-5 dark:bg-gray-700 bg-white py-4 px-3 md:py-10 lg:py-10 md:px-5 lg:px5 ${pecah.status === 1 ? `hover:bg-red-100` : `hover:bg-green-100`} border border-gray-200 dark:border-blue-400`}>
                                        <div className="space-y-2">
                                            <div className="flex flex-row text-base">
                                                <h3 className="flex-1 font-semibold  text-gray-700 dark:text-white truncate">{pecah.title}</h3>
                                                <span className=" text-gray-500 dark:text-white text-base ml-4 mt-1 truncate">{pecah.createdAt}</span>
                                            </div>
                                            <div className="text-gray-600 md:text-xl lg:text-xl text-xs dark:text-white">
                                                <p>
                                                    {pecah.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <button onClick={() => DetailBerita(data[key])} className="flex flex-row-reverse items-center justify-center px-4 py-2 shadow-sm font-medium text-sm  text-green-500 focus:ring-2 focus:ring-offset-2 hover:bg-green-100  border border-green-400 rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Detail
                                            </button>
                                            <div className="text-sm dark:text-white hidden md:block lg:block">
                                                {pecah.status}
                                            </div>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>

            <Modal
                closeModal={closeModal}
                isOpen={isOpen}
            >
                <div className="flex justify-between">
                    <h1 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Detail
                    </h1>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={closeModal} className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
                <div className="mt-5 dark:text-white">
                    {detail.title}
                </div>
                <div className="mt-5 flex">
                    <button onClick={setFormUpdate} className="flex flex-row-reverse items-center justify-center px-4 py-2 shadow-sm font-medium text-sm  text-yellow-500 focus:ring-2 focus:ring-offset-2   border border-yellow-400 rounded-lg">
                        Edit
                    </button>
                    {
                        detail.status !== 1 ?
                            (
                                <button onClick={() => dispatch({ type: "SET_DELETE_DATA", payload: detail.id })} className="ml-5 flex flex-row-reverse items-center justify-center px-4 py-2 shadow-sm font-medium text-sm  text-red-500 focus:ring-2 focus:ring-offset-2   border border-red-400 rounded-lg">
                                    Delete
                                </button>
                            ) :
                            (
                                null
                            )
                    }
                </div>
                <div className="mt-5">
                    {
                        isOpenEdit && <FormAddTodo dataDetail={detail} statusForm="UPDATE" />
                    }
                </div>
            </Modal>


        </>
    )
}


