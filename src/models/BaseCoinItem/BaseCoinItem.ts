import { types, Instance } from 'mobx-state-tree';

import { CoinNamesArr } from 'shared/types';
import { ERateNA } from 'types/rates/Rates';

const BaseCoinItem = types
    .model('BaseCoinItem', {
        rate: types.union(types.number, types.enumeration(ERateNA.NotAvaliable, [ERateNA.NotAvaliable])),
        ask: types.union(types.number, types.enumeration(ERateNA.NotAvaliable, [ERateNA.NotAvaliable])),
        bid: types.union(types.number, types.enumeration(ERateNA.NotAvaliable, [ERateNA.NotAvaliable])),
        diff24h: types.union(types.number, types.enumeration(ERateNA.NotAvaliable, [ERateNA.NotAvaliable])),
        name: types.enumeration('name', CoinNamesArr),
    });

export interface IBaseCoinItemModel extends Instance<typeof BaseCoinItem> { }

export { BaseCoinItem };
