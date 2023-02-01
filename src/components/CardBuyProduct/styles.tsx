import styled from "styled-components";

export const Container = styled.div`
    height: 285px;
    width: 217px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px 0px #00000022;

    img {
        width: 92%;
        height: 60%;
    }
`;

export const Title = styled.div`
    display: flex;
    width: 100%;
`;

export const Description = styled.div`
    display: flex;
    width: 100%;
    font-size: 10px;
    color: #2C2C2C;
`;

export const Name = styled.div`
    font-weight: bold;
    font-size: 16px;
`;

export const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 26px;
    border-radius: 5px;
    background: #373737;
    border-radius: 5px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
`;