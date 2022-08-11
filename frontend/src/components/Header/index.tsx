import { Container } from "./styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <Container>
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo"/>
                </Link>
            </div>
            <h1>Meta Vendas</h1>
        </Container>
    );
}