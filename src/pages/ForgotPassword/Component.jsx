import Input from 'components/Form/LabelInput'
import BtnBlue from 'components/Button/BtnBlue'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'
import { Login, SubTitle, InputBox, BtnBox, Form } from './styled'

const Component = ({ formik, messages }) => {
  return (
    <Login>
      <h1>Esqueci a senha</h1>
      <SubTitle>Inform seu email cadastrado e enviaremos um link para que posso redefinir sua senha.</SubTitle>
      <Form onSubmit={formik.handleSubmit}>
        <Messages formMessages={messages.messages} alert={messages.alert} />
        <InputBox>
          <Input
            type="email"
            name="email"
            label="Seu email*"
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