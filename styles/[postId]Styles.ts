import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    margin-top: 20px;
`;

export const Button = styled.button`
    margin-right: 10px;
    background: linear-gradient(100deg, rgba(73,26,204,1) 0%, rgba(94,21,149,1) 100%);
    color: #ffffff;
    width: 90px;
    height: 30px;
    border-radius: 16px;
    border: none;
    

    ${(props) =>
        props.delete &&
        css`
            background: linear-gradient(100deg, rgba(219,48,48,1) 0%, rgba(255,102,51,1) 100%);
            color: #ffffff;
        `}
    ${(props) =>
        props.save &&
        css`
            margin: 15px 20px 0 20px;
            width: 100px;
            background: linear-gradient(0deg, #0BA360 0%, #3CBA92 100%);
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
        background: #ccc;
    }
    :focus { 
        outline: none; 
    }
`;

export const Title = styled.h2`
    text-align: center;
    color: #444444;
    font-weight: 700;
    background: #EAEAEA;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    height: 40px;
`;

export const Body = styled.p`
    padding: 0 20px 0 20px;
    min-height: 55vh;
    background: #EAEAEA;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;

export const EditTitle = styled.textarea`
    padding: 0 20px 0 20px;
    font-size: 1.5em;
    font-weight: bolder;
    margin: 15px 20px 0 20px;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

export const EditBody = styled.textarea`
    margin: 15px 20px 0 20px;
    height: 200px;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

export const CommentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;