import { useFormik } from "formik"
import * as Yup from 'yup'
import { useDispatch, useSelector } from "react-redux"
import { ButtonMolecules, InputField, SelectField } from "../../molecules"
import { TypeCheckState } from "utils/interface"



const dataSelect = [
    {
        name: "1",
        value: 1
    },
    {
        name: "0",
        value: 0
    }
]

interface TypeDataDetail {
    className?: string,
    dataDetail?: {
        id: number,
        title: string,
        description: string,
        status: number,
        createdAt: string
    },
    statusForm?: string,
}

const defaultClassForm = "py-2 px-5"

export const FormAddTodo = ({ className = defaultClassForm, dataDetail, statusForm }: TypeDataDetail) => {
    const dispatch = useDispatch()
    const { data, message } = useSelector((state: TypeCheckState) => state.TodoReducer)



    const validation = {
        title: dataDetail?.title,
        description: dataDetail?.description,
        status: dataDetail?.status,
        date: dataDetail?.createdAt
    }

    const submited = (value: any) => {
        const setObject = {
            id: dataDetail?.id === undefined ? data.length + 1 : dataDetail?.id,
            title: value.title,
            description: value.description,
            status: value.status,
            createdAt: value.date
        }

        if (statusForm === "UPDATE") {
            dispatch({ type: "SET_UPDATE_DATA", payload: setObject })

        } else {
            dispatch({ type: "SET_NEW_DATA", payload: [...data, setObject] })

        }
    }

    const formik = useFormik({
        initialValues: validation,
        validationSchema: Yup.object({
            title: Yup.string().required('title wajin di isi'),
            description: Yup.string().required('Description Wajib Di isi'),
            status: Yup.string().required('Status Wajib Di pilih'),
            date: Yup.string().required('Date Wajib Di pilih'),
        }),
        onSubmit: submited,
    })

    console.log(formik.values)
    return (
        <form onSubmit={formik.handleSubmit} className={className} >
            <p className="text-gray-500 text-center dark:text-white dark:bg-gray-500  bg-green-200 px-2 py-2 rounded-md mb-5">{message}</p>
            <InputField
                id="title"
                type="text"
                name="title"
                value={formik.values.title}
                labelTitle="Masukan Titile"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.title !== undefined && formik.touched.title}
                errorMsg={formik.errors.title}
            />

            <InputField
                id="description"
                type="text"
                name="description"
                labelTitle="Masukan Description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.description !== undefined && formik.touched.description}
                errorMsg={formik.errors.description}
            />

            <SelectField
                labelOption="Pilih Jenis Status"
                id="status"
                name="status"
                value={formik.values.status}
                labelTitle="Pilih Jenis Status"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.status !== undefined && formik.touched.status}
                errorMsg={formik.errors.status}
                data={dataSelect}
            />

            <InputField
                id="date"
                type="date"
                name="date"
                labelTitle="Pilih date"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.date !== undefined && formik.touched.date}
                errorMsg={formik.errors.date}
            />

            <ButtonMolecules type="submit" classNameMolecules="mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="truncate">
                    Save Todo
                </span>
            </ButtonMolecules>

        </form>
    )
}
