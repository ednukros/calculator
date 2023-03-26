import styled, { createGlobalStyle } from "styled-components";


export const Container = styled.div`
    max-width: 500px;
    min-width:300px; 
    margin: 0 auto;
    user-select: none;

    @media screen and (min-width: 450px){
        min-width: 340px;
    }

`