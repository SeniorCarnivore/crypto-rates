import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from 'shared/hooks/useStore';
import { RatesItem } from 'components/RatesItem';

const RatesList: FC = () => {
    const { ratesStore } = useStore();
    const { ratesList } = ratesStore;

    // If I had more time I would have done it with Styled Components
    // I know about HTML semantic elements...
    return (
        <div style={{ fontFamily: 'Helvetica, "Trebuchet MS", Verdana, sans-serif', padding: 10 }} >
            <div style={{ marginBottom: 20, display: 'flex' }}>
                <div style={{ width: 70, paddingRight: 10 }}>Name</div>
                <div style={{ width: 100, paddingRight: 10 }}>Rate</div>
                <div style={{ width: 100, paddingRight: 10 }}>Ask</div>
                <div style={{ width: 100, paddingRight: 10 }}>Bid</div>
                <div style={{ width: 100, paddingRight: 10 }}>Diff24h</div>
            </div>
            <hr />
            <div style={{ overflowY: 'auto', maxHeight: 740, }}>
                {/* Lines should have hover  */}
                {
                    ratesList.map(item => <RatesItem key={item.name} {...item} />)
                }
            </div>
        </div>
    );
};

export default observer(RatesList);
