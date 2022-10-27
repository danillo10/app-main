import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Topbar, TopbarMenuDesktop, TopbarMenuMobile, Logout, TopbarActions } from './styled'
import { FaBars } from "react-icons/fa"
import { Context } from 'contexts/context'
import { logout } from 'services/auth'

const Component = () => {

  const history = useHistory()
  const { toggle, setToggle } = useContext(Context)

  return (
    <Topbar>
      <TopbarMenuDesktop onClick={() => setToggle(!toggle)}>
        <span><FaBars /></span>
      </TopbarMenuDesktop>
      <TopbarMenuMobile
        onClick={() => setToggle(!toggle)}
        className={toggle ? 'menu-open' : 'menu-closed'}
      >
        <span><FaBars /></span>
      </TopbarMenuMobile>
      <TopbarActions>
        <div>
          <Logout onClick={() => logout(history)}>Sair</Logout>
        </div>
      </TopbarActions>
    </Topbar>
  )
}

export default Component
