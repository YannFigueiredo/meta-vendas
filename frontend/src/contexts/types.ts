import { ReactNode } from "react";

export type SalesResponse = {
    content: SaleItem[];
    totalPages: number;
}

export type SaleItem = {
    id: number;
    date: string;
    seller: string;
    visits: number;
    sales: number;
    total: number;
}

export type SalesContextType = {
    sales: SalesResponse,
    setSales: (newSale: SalesResponse) => void,
    page: string,
    setPage: (newPage: string) => void,
    filter: string,
    setFilter: (newFilter: string) => void,
    phone: string,
    setPhone: (newPhone: string) => void
}

export type SalesContextProps = {
    children: ReactNode;
}