import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 486px;
    height: 100vh;
    top: 0px;
    left: calc(100vw - 486px);
    background-color: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`;

export const CartHeader = styled.div`
    width: 100%;
    height: 101px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100% - 101px - 97px);
`;

export const Checkout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 97px;
    background: #000000;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 28px
`;