import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Table from 'components/Table'
import SmLinkBlue from 'components/Button/SmLinkBlue'
import { FaChartBar } from "react-icons/fa"

const Component = props => {
    return (
        <>
            <TitleBar label="Relatórios" currentPage="" />
            <Content>
                <Card>
                    <CardTitle title="Grupos" />
                    <Table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th width="50">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data.map(item =>
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>
                                        <SmLinkBlue to={`/grupos/${item.id}/relatorios`}>
                                            <FaChartBar />
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