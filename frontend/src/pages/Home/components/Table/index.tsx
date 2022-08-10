import { useContext } from "react";
import { SalesContext } from "../../../../contexts/Sales";
import { Container, Notification } from "./styles";
import { formatDate } from "../../helpers";
import icon from "../../../../assets/icon.png";
import salesApi from "../../../../services/sales-api";

export default function Table(){
    const { sales, phone } = useContext(SalesContext);
    const sendSms = async (id: number) => {
        await salesApi.get(`sales/${id}/${phone}/notification`)
        .then(() => {alert(`Notificação enviada com sucesso para ${phone}.`)})
        .catch((error) => {
            alert("Insira um número válido! Ex: +5591912345678")
            console.error("Erro: " + error)
        });
    };

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
                                <Notification onClick={() => {sendSms(sale.id)}}>
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