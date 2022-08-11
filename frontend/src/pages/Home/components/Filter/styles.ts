import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    div{
        display: flex;
    }

    button{
        width: 180px;
        padding: 12px;
        border: 1px solid #384459;
        border-radius: 5px;
        text-transform: uppercase;
        font-weight: 700;
        color: white;
        background: #102347;
        transition: all linear .4s;
        cursor: pointer;
    }

    button:hover{
        background: white;
        color: #181818;
        border-color: #102347;
    }

    @media screen and (max-width: 480px){
        div{
            flex-direction: column;
        }
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
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

    @media screen and (max-width: 768px){
        margin-bottom: 15px;
    }
`