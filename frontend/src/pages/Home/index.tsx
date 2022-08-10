import Table from "./components/Table";
import Filter from "./components/Filter";
import { Container, Pagination } from "./styles";
import { useContext } from "react";
import { SalesContext } from "../../contexts/Sales";

export default function Home(){
    const { sales, setPage } = useContext(SalesContext);
    const paginationItems = Array.from(Array(sales.totalPages).keys());

    return(
        <Container>
            <Filter/>
            <Table/>
            <Pagination>
                {paginationItems.map(item => (
                    <div key={item} onClick={() => {setPage(item.toString())}}>{item + 1}</div>
                ))}
            </Pagination>
        </Container>
    );
}