
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'


interface modalType {
    closeModal: () => void
    openModal?: () => void
    isOpen: Boolean | any
    withButton?: Boolean
    titleButton?: String
    styleButton?: String | any
    children?: JSX.Element | JSX.Element[]
}

export const Modal = ({ closeModal, openModal, isOpen, withButton = false, titleButton, styleButton, children }: modalType) => {


    return (

        <>
            {
                withButton ?
                    (
                        <button
                            type="button"
                            onClick={openModal}
                            className={styleButton}
                        >
                            {titleButton}
                        </button>
                    ) :
                    (
                        null
                    )
            }
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto mt-10"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center bg-black bg-opacity-30 max-w-full mx-auto">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block md:w-3/5 lg:w-3/5 w-full  p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-700 shadow-xl rounded-2xl">
                                {children}

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Oke, Terima Kasih
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
