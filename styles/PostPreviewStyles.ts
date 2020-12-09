import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 300px;
    height: 250px;
    padding-bottom: 15px;
`;

export const Header = styled.div`
    width: 100%;
    height: 20%;
    background: black;
    color: white;
    text-align: center;
`;

export const Body = styled.div`
    height: 60%;
    border: 1px solid black;
    overflow: hidden;
`;

export const Footer = styled.div`
    height: 20%;
    border: 1px solid black;
    display: flex;
    justify-content: flex-end;
`;

export const More = styled.p`
    cursor: pointer;
    font-size: 14px;
    border: 1px solid grey;
    display: inline-block;
    margin-right: 10px;

    :hover {
        color: #ccc;
        border: 1px solid #ccc;
    }
`;