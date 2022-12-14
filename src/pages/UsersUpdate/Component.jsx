import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Input from 'components/Form/LabelInput'
import BtnBlue from 'components/Button/BtnBlue'
import BtnOrange from 'components/Button/BtnOrange'
import BtnRed from 'components/Button/BtnRed'
import BtnBox from 'components/Button/BtnBox'
import BtnWhite from 'components/Button/BtnWhite'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'
import Modal from 'components/Modal'
import Select from 'components/Form/LabelSelect'
import CardBody from 'components/CardBody'

const Component = props => {
  const breadcrumb = [{ path: '/usuarios', label: 'Index' }]
  return (
    <>
      <TitleBar label="Usuários" currentPage="" />
      <Content>
        <Card>
          <CardTitle title="Editar">
            <BtnOrange onClick={() => props.setVisibleModal(true)}>Excluir</BtnOrange>
          </CardTitle>
          <Content>
            <CardBody>
              <form onSubmit={props.formik.handleSubmit}>
                <Messages formMessages={props.messages.messages} alert={props.messages.alert} />
                <Input name="name" label="Nome" formik={props.formik} />
                <Input name="email" label="Email" formik={props.formik} />
                <Select
                  name="roles"
                  label="Permissão"
                  formik={props.formik}
                >
                  <option value="">Selecione...</option>
                  <option value="admin">Administrador</option>
                  <option value="user">Usuário</option>
                </Select>
                <BtnBox>
                  <BtnBlue type="submit" disabled={props.formik.isSubmitting}>
                    {props.formik.isSubmitting ? <Spinner /> : "Enviar"}
                  </BtnBlue>
                </BtnBox>
              </form>
            </CardBody>
          </Content>
        </Card>
      </Content>
      <Modal visibleModal={props.visibleModal} setVisibleModal={props.setVisibleModal}>
        <Card>
          <Content>
            <Content>
              <CardBody>
                <p>Deseja excluir esse item?</p>
                <BtnBox>
                  <BtnRed onClick={props.handleDelete}>Excluir</BtnRed>
                  <BtnWhite onClick={() => props.setVisibleModal(false)}>Cancelar</BtnWhite>
                </BtnBox>
              </CardBody>
            </Content>
          </Content>
        </Card>
      </Modal>
    </>
  )
}

export default Component