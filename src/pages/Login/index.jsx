import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import { handleUserLogin } from 'services/api/users'
import Component from './Component'

const Page = () => {

    const [messages, setMessages] = useState({ messages: [], alert: '' })
    const history = useHistory()
    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: Yup.object(Validation(Yup)),
        onSubmit: () => handleUserLogin(history, formik.values, setMessages)
    })

    return <Component formik={formik} messages={messages} />
}

export default Page