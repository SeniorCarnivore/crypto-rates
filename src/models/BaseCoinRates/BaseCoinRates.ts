import { types, Instance } from 'mobx-state-tree';

import { BaseCoinItem } from 'models/BaseCoinItem';

const BaseCoinRates = types
    .model('BaseCoinRates', {
        name: types.string,
        rates: types.array(BaseCoinItem),
    });

export interface IBaseCoinRatesModel extends Instance<typeof BaseCoinRates> { }

export { BaseCoinRates };
