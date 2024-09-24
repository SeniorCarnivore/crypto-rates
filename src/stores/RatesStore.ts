import { types, flow, cast } from 'mobx-state-tree';

import { TFetchRatesResponseDTO } from 'api/ratesRepository/rates.api.types';
import { mapRates } from 'api/ratesRepository/rates.adapters';
import { api } from 'api/api';
import { Request, BaseCoinItem } from 'models/index';

const RatesStore =
    types
        .model('RatesStore', {
            request: types.optional(Request, {}),
            ratesList: types.optional(types.array(BaseCoinItem), []),
        })
        .actions((self) => {
            return {
                init(): void {
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
                    }
                })
            };
        })
        .views((self) => ({
            get isLoading(): boolean {
                return self.request.isPending || self.request.isNotSend;
            }
        }))

export { RatesStore };