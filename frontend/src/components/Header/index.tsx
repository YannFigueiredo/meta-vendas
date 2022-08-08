import { Container } from "./styles";
import logo from "../../assets/logo.png";

export default function Header(){
    return(
        <Container>
            <div>
                <img src={logo} alt="Logo"/>
            </div>
            <h1>Meta Vendas</h1>
        </Container>
    );
}