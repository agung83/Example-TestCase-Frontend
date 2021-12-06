import { Fragment } from "react"
import { NavLink } from 'react-router-dom'
type BreadcrumbType = {
    data?: any[],

}

export const ShowBreadcrumb = ({ data }: BreadcrumbType) => {
    return (
        <Fragment>
            <div className="py-3 px-5 mb-4 dark:bg-gray-600 bg-blue-100 text-blue-900 text-sm rounded-md border border-blue-200">
                <ul className="flex wvu-breadcrumbs dark:text-white">
                    {
                        data?.map((value, key) => (
                            <div key={key}>
                                {value.now ?
                                    (
                                        <li>{value.name}</li>
                                    ) :
                                    (
                                        <li><NavLink to={value.url} className="underline font-semibold">{value.name}</NavLink></li>
                                    )
                                }
                            </div>
                        ))
                    }
                </ul>
            </div>
        </Fragment>
    )
}

