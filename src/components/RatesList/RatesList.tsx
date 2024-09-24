import { FC, FormEvent } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from 'shared/hooks/useStore';

import { Coin, CoinsList, CoinsListWrapper, ControlPanel, FancyLink, Label, SearchField } from './StyledRatesList';

const RatesList: FC = () => {
    const { ratesStore } = useStore();
    const { filteredRates, isLoading, setFilter } = ratesStore;

    const handleOnFilterChange = (e: FormEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value);
    };

    return (
        <>
            <ControlPanel>
                <Label htmlFor="search">Search:</Label>
                <SearchField name="search" type="text" onChange={handleOnFilterChange} placeholder="Type coin name" />
            </ControlPanel>

            {
                isLoading ?
                    <div>Loading rates (cool animated dots)</div> :
                    <CoinsListWrapper>
                        <CoinsList>
                            {
                                filteredRates.map(item =>
                                    <Coin key={item.name} >
                                        <FancyLink to={`rate/${item.name}`} >{item.name}</FancyLink>
                                    </Coin>
                                )
                            }
                        </CoinsList>
                    </CoinsListWrapper>
            }
        </>
    );
};

export default observer(RatesList);
