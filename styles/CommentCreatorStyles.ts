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
    height: 30px;
    width: 90px;
    background-color: #32a885;
    color: #ffffff;
    margin-top: 15px;

    ${(props) =>
        props.disabled &&
        css`
            background: #ccc;
            color: #ffffff;
            cursor: not-allowed;
        `}

    :hover {
        background-color: #ccc;
    }
`;