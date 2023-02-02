import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    width: 379px;
    height: 95px;
    background: #FFFFFF;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    img {
        width: 24%;
        height: 88%;
    }
`;

export const Name = styled.div`
    display: flex;
    align-items: center;
    width: 113px;
    height: 33px;
    font-weight: 600;
    line-height: 17px;
    color: #2C2C2C;
`;

export const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 62px;
    height: 17px;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    color: #000000;
`;

export const Qty = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50px;
`;

export const TitleQty = styled.div`
    width: 11px;
    height: 6px;
    font-size: 8px;
    font-weight: bold;
    margin-bottom: 4px;
    color: #000000;
`;

export const QtyControl = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 19px;
    border: 0.3px solid #BFBFBF;
    border-radius: 4px;
    background-color: #FFFFFF;

    button, div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        height: 100%;
        font-weight: bold;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`;

export const RemoveButton = styled.button`
    width: 18px;
    height: 18px;
    border: none;
    border-left: -367px;
    border-radius: 25px;
    top: 1px;
    background-color: #000000;
    color: #FFFFFF;
    margin-left: 14px;
    margin-bottom: 91px;
    cursor: pointer;
`;