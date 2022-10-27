import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Table from 'components/Table'
import LinkBlue from 'components/Button/LinkBlue'
import SmLinkBlue from 'components/Button/SmLinkBlue'
import { FaEdit } from "react-icons/fa"

const Component = props => {
  const breadcrumb = [
    { path: '/usuarios', label: 'Index' }
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
                <td>{props.user.name}</td>
                <td>{props.user.email}</td>
                <td>{props.user.roles}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <Card>
          <CardTitle title="Relatórios">
            <LinkBlue to={`/usuarios/${props.params.id}/relatorios/cadastrar`}>Cadastrar</LinkBlue>
          </CardTitle>
          <Table>
            <thead>
              <tr>
                <th width="60">#</th>
                <th>Relatório</th>
                <th>Card</th>
                <th>Roles</th>
                <th>Abas habilitada</th>
                <th width="50">Ações</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map(item =>
                <tr key={item.id}>
                  <td>{`#${item.id}`}</td>
                  <td>{item.name}</td>
                  <td>{item.card_name}</td>
                  <td>{item.roles}</td>
                  <td>{item.page_navigation === 1 ? 'Sim' : 'Não'}</td>
                  <td>
                    <SmLinkBlue to={`/usuarios/${props.params.id}/relatorios/${item.id}/editar`}>
                      <FaEdit />
                    </SmLinkBlue>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card>
      </Content>
    </>
  )
}

export default Component