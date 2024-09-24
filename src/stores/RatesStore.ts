import { types, flow, cast } from 'mobx-state-tree';

import { TFetchRatesResponseDTO } from 'api/ratesRepository/rates.api.types';
import { mapRates } from 'api/ratesRepository/rates.adapters';
import { api } from 'api/api';
import { Request, BaseCoinItem, IBaseCoinItemModel } from 'models/index';
import { ECoinName } from 'shared/types';

const RatesStore =
    types
        .model('RatesStore', {
            request: types.optional(Request, {}),
            ratesList: types.optional(types.array(BaseCoinItem), []),
            filter: types.optional(types.string, ''),
        })
        .actions((self) => {
            return {
                init() {
                    this.loadRates();
                },
                loadRates: flow(function* () {
                    // There should be a tick interval, but no time, sry
                    // Reders of components should be optimise to rerender only updated data
                    const response: TFetchRatesResponseDTO = yield self.request.send(
                        api.ratesRepository.fetchRates, {}
                    );

                    if (response !== null) {
                        self.ratesList = cast(mapRates(response));
                    } else {
                        // TODO: display errors via toasts servise ot smth
                    }
                }),
                findRates(coin: ECoinName) {
                    return self.ratesList.find(rate => rate.name === coin) as IBaseCoinItemModel;
                },
                setFilter(searchStr: string) {
                    self.filter = searchStr;
                }
            };
        })
        .views((self) => ({
            get isLoading() {
                return self.request.isPending || self.request.isNotSend;
            },
            get filteredRates() {
                return self.ratesList.filter(rate => rate.name.includes(self.filter));
            }
        }))

export { RatesStore };