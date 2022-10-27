import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import { handleUpdateReport, handleReportById, handleReportDelete } from 'services/api/reports'
import { handleUserShow } from 'services/api/users'
import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Input from 'components/Form/LabelInput'
import Checkbox from 'components/Form/LabelCheckbox'
import BtnBlue from 'components/Button/BtnBlue'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'
import Modal from 'components/Modal'
import BtnRed from 'components/Button/BtnRed'
import BtnBox from 'components/Button/BtnBox'
import BtnWhite from 'components/Button/BtnWhite'
import Table from 'components/Table'
import CardBody from 'components/CardBody'
import { FaSleigh } from 'react-icons/fa'

const Page = () => {
  const params = useParams()
  const [data, setData] = useState({})
  const [user, setUser] = useState({})
  const [visibleModal, setVisibleModal] = useState(false)

  useEffect(() => {
    (async () => {
      setUser(await handleUserShow(params.id))
    })()
  }, [params.id])

  useEffect(() => {
    (async () => {
      setData(await handleReportById(params.report_id))
    })()
  }, [params.report_id])

  const [messages, setMessages] = useState({ messages: [], alert: '' })
  const history = useHistory()
  const formik = useFormik({
    initialValues: { roles: data.roles, page_navigation: data.page_navigation === 1 ? true : false },
    validationSchema: Yup.object(Validation(Yup)),
    onSubmit: () => handleUpdateReport(history, formik.values, params.report_id, params.id, setMessages),
    enableReinitialize: true
  })

  const handleDelete = async () => await handleReportDelete(params.report_id, params.id, history)

  const breadcrumb = [
    { path: '/usuarios', label: 'Index' },
    { path: `/usuarios/${params.id}/relatorios`, label: 'Relatórios' }
  ]

  return (
    <>
      <TitleBar label="Usuários" currentPage="" />
      <Content>
        <Card>
          <CardTitle title="Usuário" />
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Permissão</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.roles}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <Card>
          <CardTitle title="Editar">
            <BtnRed onClick={() => setVisibleModal(true)}>Excluir</BtnRed>
          </CardTitle>
          <Content>
            <CardBody>
              <form onSubmit={formik.handleSubmit}>
                <Messages formMessages={messages.messages} alert={messages.alert} />
                <Input name="roles" label="Roles" formik={formik} />
                <Checkbox
                  name='page_navigation'
                  label='Habilitar Abas'
                  formik={formik}
                  checked={data.page_navigation}
                />
                <BtnBox>
                  <BtnBlue type="submit" disabled={formik.isSubmitting}>
                    {formik.isSubmitting ? <Spinner /> : "Enviar"}
                  </BtnBlue>
                </BtnBox>
              </form>
            </CardBody>
          </Content>
        </Card>
      </Content>
      <Modal visibleModal={visibleModal} setVisibleModal={setVisibleModal}>
        <Card>
          <Content>
            <Content>
              <CardBody>
                <p>Deseja excluir esse item?</p>
                <BtnBox>
                  <BtnRed onClick={handleDelete}>
                    Excluir
                  </BtnRed>
                  <BtnWhite onClick={() => setVisibleModal(false)}>Cancelar</BtnWhite>
                </BtnBox>
              </CardBody>
            </Content>
          </Content>
        </Card>
      </Modal>
    </>
  )
}

export default Page