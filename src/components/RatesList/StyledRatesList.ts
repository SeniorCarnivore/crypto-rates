import { Link } from "react-router-dom";
import styled from "styled-components";

export const CoinsListWrapper = styled.nav`
    user-select: none;
`;

export const ControlPanel = styled.div`
    background-color: #40c4ff;
    padding: 10px;
    border-radius: 0px 0px 5px 5px;
`;

export const Label = styled.label`
    color: #000;
    font-weight: 600;
    margin-right: 10px;
`;

export const SearchField = styled.input`
    height: 24px;
    padding-left: 5px;
    border: 0;
    border-radius: 5px;
`;

export const CoinsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
`;

export const Coin = styled.li`
    display: flex;
    min-width: 70px;
    align-items: stretch;
    justify-content: center;
    margin: 0 10px 10px 0;
    flex-basis: 50px;
    border-radius: 5px;
    background-color: #374ef4; /* 😉 */
    transition: background-color .3s cubic-bezier(.445,.05,.55,.95);

    &:hover {
        background-color: #6f81ff;
    }
`;

export const FancyLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 10px 0;
    width: 100%;
    text-align: center;
`;