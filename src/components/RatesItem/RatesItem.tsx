import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { ECoinName } from 'shared/types';
import { ERateNA } from 'types/rates/Rates';

interface IRatesItemProps {
    name: ECoinName;
    rate: number | ERateNA.NotAvaliable,
    ask: number | ERateNA.NotAvaliable,
    bid: number | ERateNA.NotAvaliable,
    diff24h: number | ERateNA.NotAvaliable
}

const RatesItem: FC<IRatesItemProps> = (props) => {
    const { name, rate, ask, bid, diff24h } = props;

    return (
        // Yep, copypaste of header, too bad :(
        // Guys without USD ref at all should be skipped in the adapter layer
        <div style={{ marginBottom: 10, display: 'flex' }}>
            <div style={{ width: 70, textTransform: 'uppercase', paddingRight: 10 }}><a href="#">{name}</a></div>
            {/* It's better to map all values into strings (untill we don't need calculations); */}
            {/* Or we could do it via model.view's */}
            <div title={String(rate)} style={{ width: 100, paddingRight: 10, overflow: 'hidden', textOverflow: 'ellipsis' }}>{rate}</div>
            <div title={String(ask)} style={{ width: 100, paddingRight: 10, overflow: 'hidden', textOverflow: 'ellipsis' }}>{ask}</div>
            <div title={String(bid)} style={{ width: 100, paddingRight: 10, overflow: 'hidden', textOverflow: 'ellipsis' }}>{bid}</div>
            <div title={String(diff24h)} style={{ width: 100, paddingRight: 10, overflow: 'hidden', textOverflow: 'ellipsis' }}>{diff24h}</div>
        </div>
    );
};

export default observer(RatesItem);