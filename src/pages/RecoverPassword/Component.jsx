import Input from 'components/Form/LabelInput'
import BtnBlue from 'components/Button/BtnBlue'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'
import { Login, SubTitle, InputBox, BtnBox, Form } from './styled'

const Component = ({ formik, messages }) => {
  return (
    <Login>
      <h1>Esqueci a senha</h1>
      <SubTitle>Informe sua nova senha.</SubTitle>
      <Form onSubmit={formik.handleSubmit}>
        <Messages formMessages={messages.messages} alert={messages.alert} />
        <InputBox>
          <Input
            type="password"
            name="password"
            label="Sua senha"
            formik={formik}
          />
        </InputBox>
        <InputBox>
          <Input
            type="password"
            name="password_confirmation"
            label="Confirmar"
            formik={formik}
          />
        </InputBox>
        <BtnBox>
          <BtnBlue type="submit" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? <Spinner /> : "Enviar"}
          </BtnBlue>
        </BtnBox>
      </Form>
    </Login>
  )
}

export default Component