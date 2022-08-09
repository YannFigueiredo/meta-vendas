import styled from "styled-components";

export const Container = styled.div `
    table{
        border-spacing: 0;
        min-width: 100%;
    }

    table thead{
        color: white;
        font-weight: 700;
    }

    table tbody{
        color: #CFCFCF;
        font-weight: 400;
    }

    table tbody tr:nth-child(odd){
        background-color: #242C3B;
    }

    table tr th, table tr td{
        padding: 15px;
        text-align: center;
        border-bottom: 1px solid #5F6E82;
    }
`