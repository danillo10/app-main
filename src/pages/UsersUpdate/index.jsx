import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import { handleUserShow, handleUpdateUser, handleUserDelete } from 'services/api/users'
import Component from './Component'

const Page = () => {

    const history = useHistory()
    const params = useParams()
    const [messages, setMessages] = useState({ messages: [], alert: '' })
    const [data, setData] = useState({})
    const [visibleModal, setVisibleModal] = useState(false)

    useEffect(() => {
        (async () => setData(await handleUserShow(params.id)))()
    }, [params.id])

    const formik = useFormik({
        initialValues: { name: data.name, email: data.email, roles: data.roles },
        validationSchema: Yup.object(Validation(Yup)),
        onSubmit: () => handleUpdateUser(history, formik.values, params.id, setMessages),
        enableReinitialize: true
    })

    const handleDelete = async () => await handleUserDelete(params.id, history)

    return <Component
        setVisibleModal={setVisibleModal}
        visibleModal={visibleModal}
        formik={formik}
        messages={messages}
        handleDelete={handleDelete}
    />
}

export default Page