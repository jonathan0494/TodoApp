import styled, { css } from 'styled-components'

const Button = styled.button`
    background: transparent;
    width: 160px;
    height: 35px;
    color: white;
    border-radius: 3px;
    padding: 0.25em 1em;
 
    ${({primary}) => primary && css`
        background: #0d6efd;
        border: 2px solid #0d6efd;
        &:hover {
            background: #1363DF;
        }
    `};
    ${({warning}) => warning && css`
        background: #ffc107;
        border: 2px solid #ffc107;
        &:hover {
            background: yellow;
        }
    `};
    ${({danger}) => danger && css`
        background: #dc3545;
        border: 2px solid #dc3545;
        &:hover {
            background: #f02222; 
        }
    `};
`;
export default Button;