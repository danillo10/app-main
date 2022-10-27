import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Table from 'components/Table'
import LinkBlue from 'components/Button/LinkBlue'
import SmLinkBlue from 'components/Button/SmLinkBlue'
import { FaEdit, FaChartArea } from "react-icons/fa"
import Td from 'components/Td'

const Component = props => {
    return (
        <>
            <TitleBar label="Usuários" currentPage="" />
            <Content>
                <Card>
                    <CardTitle title="Listagem">
                        <LinkBlue to="/usuarios/cadastrar">Cadastrar</LinkBlue>
                    </CardTitle>
                    <Table>
                        <thead>
                            <tr>
                                <th width="60">#</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Permissão</th>
                                <th width="100">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data.map(item =>
                                <tr key={item.id}>
                                    <td>{`#${item.id}`}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.roles}</td>
                                    <Td>
                                        <SmLinkBlue to={`/usuarios/${item.id}/editar`}>
                                            <FaEdit />
                                        </SmLinkBlue>
                                        {item.roles === 'user' &&
                                            <SmLinkBlue to={`/usuarios/${item.id}/relatorios`}>
                                                <FaChartArea />
                                            </SmLinkBlue>
                                        }
                                    </Td>
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