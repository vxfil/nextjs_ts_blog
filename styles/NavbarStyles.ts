import styled from 'styled-components';

export const Wrapper = styled.nav`
    display: flex;
    width: 100%;
    height: 140px;
    background: linear-gradient(0deg, #0BA360 0%, #3CBA92 100%);
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 13px -3px rgba(0,0,0,0.77);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const Logo = styled.h1`
    color: #ffffff;
    cursor: pointer;
    margin-left: 40px;
    display: block;
`;

export const LinksWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 200px;
    list-style-type: none;
    margin-right: 40px;
`;

export const Item = styled.li`
    color: #ffffff;
    cursor: pointer;
    font-weight: 600;

    :hover {
        color: #ccc;
    }
`;