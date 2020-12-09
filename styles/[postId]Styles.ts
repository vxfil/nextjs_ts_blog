import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    margin-top: 10px;
`;

export const Button = styled.button`
    margin-right: 5px;
    background-color: #3268a8;
    color: #ffffff;

    ${(props) =>
        props.delete &&
        css`
            background: #e32f1b;
            color: #ffffff;
        `}
    ${(props) =>
        props.save &&
        css`
            margin: 15px 20px 0 20px;
            width: 100px;
            background: #31b059;
            color: #ffffff;
        `}
        ${(props) =>
        props.disabled &&
        css`
            margin: 15px 20px 0 20px;
            width: 100px;
            background: #ccc;
            color: #ffffff;
            cursor: not-allowed;
        `}

    :hover {
        background-color: #ccc;
    }
`;

export const Title = styled.h2`
    text-align: center;
`;

export const Body = styled.p`
    padding: 0 20px 0 20px;
    min-height: 55vh;
`;

export const EditTitle = styled.textarea`
    padding: 0 20px 0 20px;
    font-size: 1.5em;
    font-weight: bolder;
    margin: 15px 20px 0 20px;
`;

export const EditBody = styled.textarea`
    margin: 15px 20px 0 20px;
    height: 200px;
`;

export const CommentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
`;