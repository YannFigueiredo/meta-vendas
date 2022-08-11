import { createContext } from "react";
import salesApi from "../services/sales-api";
import { SalesResponse, SalesContextType, SalesContextProps } from "./types";
import { useState, useEffect } from "react";

const initialValue = {
    sales: {content: [], totalPages: 0},
    setSales: () => {},
    page: '0',
    setPage: () => {},
    filter: '',
    setFilter: () => {},
}

export const SalesContext = createContext<SalesContextType>(initialValue);

export default function SalesProvider({children}: SalesContextProps){
    const [ sales, setSales ] = useState<SalesResponse>(initialValue.sales);
    const [ page, setPage ] = useState<string>(initialValue.page);
    const [ filter, setFilter ] = useState<string>(initialValue.filter);
    //const [ phone, setPhone ] = useState<string>(initialValue.phone);

    async function loadApi(){
        await salesApi.get(`/sales?page=${page}${filter}`)
        .then(response => {
            setSales(response.data);
        })
        .catch((error) => {console.error("Erro: " + error)});
    }

    useEffect(() => {
        loadApi();
    }, [filter, page]);

    return(
        <SalesContext.Provider value={{sales, setSales, page, setPage, filter, setFilter}}>
            {children}
        </SalesContext.Provider>
    );
}

