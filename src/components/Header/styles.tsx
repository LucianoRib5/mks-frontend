import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    background-color: var(--primary-color);
    width: 100%;
    height: 101px;    
    align-items: center;
`;
export const Logo = styled.div`
    display: flex;
    gap: .5rem;
    margin: 28px 1262px 29px 65px;
`;

export const Text1 = styled.div`
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;
    color: #FFFFFF;
`;

export const Text2 = styled.div`
    font-size: 20px;
    font-weight: 300;
    line-height: 19px;
    color: #FFFFFF;
    margin-top: .4rem;
`;

export const ButtonCart = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    width: 90px;
    height: 45px;
    margin: 29px 88px 27px;
    font-size: 18px;
    font-weight: 700;
    background-color: #FFFFFF;
    border: none;
    border-radius: 8px;  
    cursor: pointer;  
`;