import { Login, Image, Form, Logo, LoginBox } from './styled'

const Base = ChildrenComponent => {

  const ComponentBase = props => {
    return (
      <Login>
        <Form>
          <LoginBox>
            <Logo>
              <img src="/logo-nivel-3-2.jpeg" alt="analitycdbi" />
            </Logo>
            <ChildrenComponent {...props} />
          </LoginBox>
        </Form>
        <Image>
          <div></div>
        </Image>
      </Login>
    )
  }

  return ComponentBase
}

export default Base