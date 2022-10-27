import { Link } from 'react-router-dom'
import Input from 'components/Form/LabelInput'
import BtnOrange from 'components/Button/BtnOrange'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'
import { Login, SubTitle, InputBox, BtnBox, ForgotPassword, Form } from './styled'

const Component = ({ formik, messages }) => {
  return (
    <Login>
      <h1>Login</h1>
      <SubTitle>Entre com o seu email e senha.</SubTitle>
      <Form onSubmit={formik.handleSubmit}>
        <Messages formMessages={messages.messages} alert={messages.alert} />
        <InputBox>
          <Input
            type="email"
            name="email"
            label="Email"
            formik={formik}
          />
        </InputBox>
        <InputBox>
          <Input
            type="password"
            name="password"
            label="Senha"
            formik={formik}
          />
        </InputBox>
        <ForgotPassword>
          <Link to="/esqueci-senha">Esqueceu a senha?</Link>
        </ForgotPassword>
        <BtnBox>
          <BtnOrange type="submit" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? <Spinner /> : "Entrar"}
          </BtnOrange>
        </BtnBox>
      </Form>
    </Login>
  )
}

export default Component