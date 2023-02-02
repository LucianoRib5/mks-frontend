import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 217px;
    height: 285px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px 0px #00000022;

    img {
        width: 74%;
        height: 62%;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
`;

export const Title = styled.div`
    display: flex;
    width: 100%;
    padding-left: 14px;
`;

export const Description = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 10px;
    font-weight: 600;
    line-height: 12px;
    padding-left: 14px;
    color: #2C2C2C;
    margin-top: 8px;
`;

export const Name = styled.div`
    display: flex;
    align-items: center;
    width: 124px;
    height: 38px;
    font-size: 16px;
    font-weight: bold;
`;

export const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 26px;
    border-radius: 5px;
    background-color: #373737;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 700;
`;

export const BuyButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    width: 100%;
    height: 31.91px;
    border: none;
    border-radius: 0px 0px 8px 8px;
    background-color: var(--primary-color);
    color: white;
    font-size: 14px;
    font-weight: 600;
`;