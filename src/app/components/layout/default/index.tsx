import { Fragment, useEffect } from 'react'
import Navbar from '../navbar/lazlyload'
import Footer from '../footer/lazyload'
import { Breadcrumb } from 'app/components/interface'

type DefaultLayoutType = {
    children: JSX.Element | JSX.Element[],
    breadcrumb?: any[],
    title?: string

}

export const Layout = ({ children, breadcrumb, title }: DefaultLayoutType) => {
    let theme = localStorage.getItem('theme');
    useEffect(() => {
        document.title = `${title === undefined ? `TestCase Majoo` : title}`
        let html = (document.querySelector('html') as any)
        html.setAttribute('class', theme)
    }, [theme, title])

    return (
        <Fragment>
            <div className="mx-auto bg-grey-400">
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <div className="flex flex-1">
                        <main className="bg-white-300  overflow-hidden" />
                        <div className="container py-5 px-3">
                            {breadcrumb !== undefined ? <Breadcrumb data={breadcrumb} /> : null}
                            {children}
                        </div>
                        <main />
                    </div>
                    <Footer />
                </div>
            </div>
        </Fragment>
    )
}
