import styled, {css} from 'styled-components';

export const CommentInput = styled.textarea`
    width: 50%;
    min-height: 50px;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    background: #F7F9FA;
`;

export const CommentButton = styled.button`
    margin-top: 20px;
    background: linear-gradient(100deg, rgba(73,26,204,1) 0%, rgba(94,21,149,1) 100%);
    color: #ffffff;
    width: 90px;
    height: 30px;
    border-radius: 16px;
    border: none;

    ${(props) =>
        props.disabled &&
        css`
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