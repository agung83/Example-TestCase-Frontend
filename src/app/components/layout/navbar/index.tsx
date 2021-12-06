
import { useState, useEffect, Fragment } from 'react'
import { Switch, Transition, Menu } from '@headlessui/react'


interface ThemeType {
    setLightMode: () => {},
    setDarkMode: () => {},
    showSidebar: () => {},
    hiddenSidebar: () => {},
    statusSidebar: String
}

export function Navbar({ setLightMode, setDarkMode }: ThemeType) {
    const [enabled, setEnabled] = useState(false)
    const [isShowing, setIsShowing] = useState(false)
    let theme = localStorage.getItem('theme')
    useEffect(() => {
        if (theme === "light") {
            setEnabled(false)
            setLightMode()
        } else {
            setEnabled(true)
            setDarkMode()
        }
    }, [theme, setDarkMode, setEnabled, setLightMode])

    const switchChange = () => {
        if (theme === "dark") {
            setEnabled(false)
            setLightMode()
        } else {
            setEnabled(true)
            setDarkMode()
        }
    }




    return (
        <>
            <header className="bg-white dark:bg-gray-800 border-b-2  dark:border-blue-300  sticky top-0 z-50">
                <div className="flex justify-between">
                    <div className="p-1 mx-3 inline-flex items-center">
                        <button type="button" onClick={() => setIsShowing((isShowing) => !isShowing)} className="md:hidden lg:hidden hover:text-green-600 dark:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <h1 className="text-green-500 text-xl dark:text-white font-bold p-2">MAJOO TEST CASE</h1>
                    </div>
                    <div className="p-1 flex flex-row items-center">
                        <div className="pr-4">
                            <Switch
                                checked={true}
                                onChange={switchChange}
                                className={`${enabled ? 'bg-gray-700' : 'bg-gray-300'
                                    } relative inline-flex items-center h-6 rounded-full w-11`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block w-4 h-4 transform  rounded-full  bg-gray-100`}
                                />
                            </Switch>
                        </div>
                        <Menu as="div" className="relative inline-block text-left mr-1">

                            <div>
                                <Menu.Button className="dark:text-white text-gray-800 p-2 text-sm no-underline hidden md:block lg:block">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-8 w-8 text-green-500 mr-2 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                    Agung Laksmana

                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right dark:bg-gray-700 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-1 py-1 ">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'text-gray-900 dark:text-white dark:bg-gray-600  bg-gray-100' : 'dark:text-white text-gray-900'
                                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                >

                                                    Hallo
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>

            </header>
            <Transition
                show={isShowing}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="md:hidden lg:hidden sticky top-0 z-50 dark:bg-gray-700 bg-gray-50 overflow-y-scroll h-96"
            >
                <div className="p-3 font-medium dark:text-white">
                    <img className="inline-block mr-3 h-8 w-8 rounded-full" src="https://ppdb.sumbarprov.go.id/img/pilih_jalur.598e9978.png" alt="" />
                    Hi, Agung Laksmana
                </div>
                <ul className="grid grid-cols-2 gap-4 mt-3">

                </ul>
            </Transition>
        </>
    )
}
