import Table from "./components/Table";
import Filter from "./components/Filter";
import { Container } from "./styles";

export default function Home(){
    return(
        <Container>
            <Filter/>
            <Table/>
        </Container>
    );
}