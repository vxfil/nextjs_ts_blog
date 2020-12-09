import styled from 'styled-components';

export const Wrapper = styled.nav`
    display: flex;
    width: 100%;
    height: 140px;
    background: #000000;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.h1`
    color: #ffffff;
    cursor: pointer;
    margin-left: 8px;
    display: block;
`;

export const LinksWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 200px;
    list-style-type: none;
`;

export const Item = styled.li`
    color: #ffffff;
    cursor: pointer;

    :hover {
        color: #ccc;
    }
`;