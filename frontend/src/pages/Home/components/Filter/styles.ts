import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    div{
        display: flex;
    }
`

export const Input = styled.div `
    display: flex;
    flex-direction: column;

    input{
        border: none;
        background: #1B2531;
        padding: 12px;
        width: 180px;
        color: #9AAABE;
        border: 1px solid #384459;
        border-radius: 5px;
        font-size: 1em;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }

    label{
        color: white;
        font-weight: 400;
    }
`