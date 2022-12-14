import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding: 7px;

    ${({ hidden }) => hidden && css`
        display: none;
    `};
`;

export const Button = styled.button`
    
    border: none;
    color: #fff;
    height: 30px;
    width: 30px;
    transition: 0.2s;
    cursor: pointer;

    ${({ toggleDone }) => toggleDone && css`
        background-color: green;

        &:hover {
            background-color: hsl(120, 100%, 30%);
        };

        &:active {
            background-color: hsl(120, 100%, 35%);
        };
    `};

    ${({ remove }) => remove && css`
        background-color: red;

        &:hover {
            background-color: hsl(0, 100%, 55%);
        };

        &:active {
            background-color: hsl(0, 100%, 60%);
        };
    `};
`;

export const TaskLink = styled(Link)`
    word-break: break-word;
    flex-grow: 1;
    margin: 0 15px;
    text-decoration: none;
    color: black;

    &:hover {
        font-weight: bold;
    };

    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `};
`;