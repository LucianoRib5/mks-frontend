import styled from "styled-components";

interface Props {
    isOpen: boolean
}

export const Container = styled.div<Props>`
    position: absolute;
    width: 486px;
    height: 100vh;
    top: 0px;
    left: calc(100vw - 486px);
    left: ${props => props.isOpen ? 'calc(100vw - 486px)' : 'calc(100vw + 486px)' };
    transition: 1s;
    background-color: var(--primary-color);
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`;

export const CartHeader = styled.div`
    display: flex;
    width: 100%;
    height: 101px;
`;

export const Title = styled.div`
    width: 180px;
    height: 56px;
    padding: 36px 0 0 0px;
    margin-left: 47px;
    font-size: 27px;
    font-weight: 900;
    color: #FFFFFF;
`;

export const CloseButton = styled.button`
    width: 38px;
    height: 38px;
    border: none;
    border-radius: 25px;
    font-size: 28px;
    font-weight: 400;
    margin: 39px 22px 0 199px;
    background-color: #000000;
    color: #FFFFFF;
    cursor: pointer;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 28px;
    width: 100%;
    height: calc(100% - 101px - 97px - 57px);
    padding: 70px 0 0 0px;
    overflow-y: auto;
`;

export const Checkout = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 97px;
    font-size: 28px;
    font-weight: bold;
    background-color: #000000;
    color: #FFFFFF;
`;

export const Total = styled.div`
    display: flex;
    gap: 204px;
    width: 379px;
    height: 57px;
    font-size: 28px;
    font-weight: 700;
    margin: 0 0 0 47px;
    padding: 8px 0 0 0;
    background-color: var(--primary-color);
    color: #FFFFFF;
`;