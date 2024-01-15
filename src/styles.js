import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 95vh;

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
`

export const Content = styled.div`
    width: 25%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Footer = styled.footer`
    width: 100vw;
    min-height: 5vh;
    color: #fff;
    opacity: 0.25;
    font-family: Roboto;
    font-weight: lighter;
    
    display: flex;
    justify-content: center;
    align-items: center;
`