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
    setFilter: () => {}
}

export const SalesContext = createContext<SalesContextType>(initialValue);

export default function SalesProvider({children}: SalesContextProps){
    const [ sales, setSales ] = useState<SalesResponse>(initialValue.sales);
    const [ page, setPage ] = useState<string>(initialValue.page);
    const [ filter, setFilter ] = useState<string>(initialValue.filter);

    async function loadApi(){
        await salesApi.get(`/sales`)
        .then(response => {
            setSales(response.data);
        })
        .catch((error) => {console.error("Erro: " + error)});
    }

    useEffect(() => {
        loadApi();
    }, []);

    return(
        <SalesContext.Provider value={{sales, setSales, page, setPage, filter, setFilter}}>
            {children}
        </SalesContext.Provider>
    );
}

