import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Label = styled.label`
    margin-top: 10px;
    color: #444444;
    font-weight: 600;
`;

export const Input = styled.input`
    max-width: 700px;
    min-width: 350px;
    margin-top: 10px;
    border: none;
    border-radius: 15px;
    height: 30px;
    outline: none;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

export const TextArea = styled.textarea`
    height: 400px;
    max-width: 700px;
    min-width: 350px;
    margin-top: 10px;
    text-align: left;
    border: none;
    border-radius: 10px;
    outline: none;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
    margin-top: 10px;
    height: 40px;
    width: 120px;
    border: none;
    cursor: pointer;
    display: inline-block;
    background: linear-gradient(0deg, #0BA360 0%, #3CBA92 100%);
    color: #ffffff;
    border-radius: 16px;
    text-align: center;
    
    :hover {
        background: #219269;
    }
`;

export const Error = styled.p`
    color: red;
    font-size: 12px;
`;