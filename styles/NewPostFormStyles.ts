import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Label = styled.label`
    margin-top: 10px;
`;

export const Input = styled.input`
    width: 500px;
    margin-top: 10px;
`;

export const TextArea = styled.textarea`
    height: 400px;
    width: 500px;
    margin-top: 10px;
    text-align: left;
`;

export const Button = styled.button`
    margin-top: 10px;
    height: 30px;
    width: 90px;
    background-color: #ffffff;

    :hover {
        background-color: #ccc;
    }
`;

export const Error = styled.p`
    color: red;
    font-size: 12px;
`;