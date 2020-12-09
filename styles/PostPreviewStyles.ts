import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 300px;
    height: 250px;
    padding-bottom: 15px;
`;

export const Header = styled.div`
    width: 100%;
    height: 20%;
    background: #1B8E69;
    color: white;
    text-align: center;
    vertical-align: middle;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-weight: 600;
`;

export const Body = styled.div`
    height: 60%;
    overflow: hidden;
    background: #F7F9FA;
    padding: 10px;
`;

export const Footer = styled.div`
    height: 20%;
    display: flex;
    justify-content: flex-end;
    background: #F7F9FA;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

export const More = styled.p`
    cursor: pointer;
    font-size: 14px;
    display: inline-block;
    margin-right: 15px;
    background: linear-gradient(0deg, #0BA360 0%, #3CBA92 100%);
    color: #ffffff;
    width: 95px;
    height: 25px;
    border-radius: 16px;
    text-align: center;
    
    :hover {
        background: #219269;
    }
`;