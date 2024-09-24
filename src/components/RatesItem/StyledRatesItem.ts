import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const shake = keyframes`
    0%{ transform: translate(1px, 1px) rotate(0deg) }
    10% { transform: translate(-1px, -2px) rotate(- 1deg)}
    20% { transform: translate(-3px, 0px) rotate(1deg)}
    30% { transform: translate(3px, 2px) rotate(0deg)}
    40% { transform: translate(1px, -1px) rotate(1deg)}
    50% { transform: translate(-1px, 2px) rotate(- 1deg)}
    60% { transform: translate(-3px, 1px) rotate(0deg)}
    70% { transform: translate(3px, 1px) rotate(- 1deg)}
    80% { transform: translate(-1px, -1px) rotate(1deg)}
    90% { transform: translate(1px, 2px) rotate(0deg)}
    100% { transform: translate(1px, -2px) rotate(- 1deg)}
`;

export const GoBackLink = styled(Link)`
    display: inline-block;
    color: #fff;
    text-decoration: none;
    margin-bottom: 20px;
    animation-name: ${shake};
    animation-duration: 1000ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
`;

export const GoBackIcon = styled.span`
    font-size: 20px;
    transform: rotate(-90deg) translate(-5px, -5px);
    display: inline-block;
    margin-right: 10px;
`;

export const Table = styled.div`
    display: flex;
    border-top: 1px #fff solid;
    flex-direction: column;
    padding-top: 10px;
`;

export const TableRow = styled.div`
    text-transform: uppercase;
    border-bottom: 1px #323232 solid;
    padding: 10px 0;
`;

export const TdLabel = styled.span`
    display: inline-block;
    width: 150px;
`;