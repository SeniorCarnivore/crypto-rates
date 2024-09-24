import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from "react-router-dom";

import { useStore } from 'shared/hooks/useStore';
import { ECoinName } from 'shared/types';

import { GoBackIcon, GoBackLink, TableRow, Table, TdLabel } from './StyledRatesItem';

const RatesItem: FC = () => {
    const params = useParams();
    const { ratesStore } = useStore();
    const { findRates } = ratesStore;
    const { coin } = params;
    const rates = findRates(coin as ECoinName);
    // TODO: inconsistent "rates is undefined" error
    const { name, rate, ask, bid, diff24h } = rates;

    return (
        <div style={{ fontFamily: 'Helvetica, "Trebuchet MS", Verdana, sans-serif', padding: 10 }}>
            <GoBackLink to="/">
                <GoBackIcon>👍</GoBackIcon>
                Go Back
            </GoBackLink>

            <Table>
                <TableRow><TdLabel>Name:</TdLabel>{name}</TableRow>
                <TableRow><TdLabel>Rate:</TdLabel>{rate}</TableRow>
                <TableRow><TdLabel>Ask:</TdLabel>{ask}</TableRow>
                <TableRow><TdLabel>Bid:</TdLabel>{bid}</TableRow>
                <TableRow><TdLabel>Diff24h:</TdLabel>{diff24h}</TableRow>
            </Table>
        </div>
    );
};

export default observer(RatesItem);