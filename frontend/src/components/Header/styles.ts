import styled from "styled-components";

export const Container = styled.header `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 0;

    div{
        width: 150px;
    }
    
    div img{
        max-width: 100%;
        width: 100%;
    }

    h1{
        color: white;
        font-weight: 700;
        font-size: 1.5em;
    }
`