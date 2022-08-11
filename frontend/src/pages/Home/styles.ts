import styled from "styled-components";

export const Container = styled.div `
    background: #283142;
    border-radius: 10px;
    margin: 0 25px 20px 25px;
    padding: 25px;
`

export const Pagination = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 15px;

    div{
        background: #102347;
        padding: 8px;
        border-radius: 8px;
        border: 1px solid #384459;
        margin-right: 5px;
        color: white;
        font-weight: 700;
        width: 40px;
        height: 40px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all linear .4s;
    }

    div:hover{
        background: white;
        color: #181818;
        border-color: #102347;
    }
`
