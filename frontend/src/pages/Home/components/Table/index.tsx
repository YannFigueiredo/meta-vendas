import { useContext } from "react";
import { SalesContext } from "../../../../contexts/Sales";
import { Container, Notification } from "./styles";
import { formatDate } from "../../helpers";
import icon from "../../../../assets/icon.png";

export default function Table(){
    const { sales } = useContext(SalesContext);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Visitas</th>
                        <th>Vendas</th>
                        <th>Total</th>
                        <th>Notificar</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.content.map(sale => (
                        <tr>
                            <td>{sale.id}</td>
                            <td>{formatDate(sale.date)}</td>
                            <td>{sale.seller}</td>
                            <td>{sale.visits}</td>
                            <td>{sale.sales}</td>
                            <td>R$ {sale.total.toFixed(2)}</td>
                            <td>
                                <Notification>
                                    <img src={icon} alt="Botão para notificar por SMS"/>
                                </Notification>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}