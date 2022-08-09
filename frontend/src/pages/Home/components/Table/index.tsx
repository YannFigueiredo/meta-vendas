import { useContext } from "react";
import { SalesContext } from "../../../../contexts/Sales";
import { Container } from "./styles";
import { formatDate } from "../../helpers";

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
                            <td>Notificar</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}