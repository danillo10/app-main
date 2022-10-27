import styled from 'styled-components'

export const Login = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  background-image: url('/edificio.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto auto;
`
export const Image = styled.div`
  flex: 3;
  & div {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1440px) {
    flex: 2;
    & div {
      background-position: left top;
    }
  }
  @media (max-width: 960px) {
    display: none;
  }
`
export const Form = styled.div`
  flex: 2;
  padding: 25px;
  display: flex;
  justify-content: center;
  `
export const LoginBox = styled.div`
  padding: 15px;
  background-color: var(--color-white);
  max-width: 450px;
  width: 100%;
  border-radius: 50px;
`
export const Logo = styled.div`
  width: 100%;
  padding: 25px 25px 50px 25px;
  display: flex;
  justify-content: center;
  & img {
    width: 200px;
  }
`