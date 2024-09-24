import { Instance, types } from 'mobx-state-tree';

import { RatesStore } from './RatesStore';

const RootStore = types
  .model('RootStore', {
    ratesStore: types.optional(RatesStore, {}),
  })
  .actions((self) => ({
    initApplication(): void {
      self.ratesStore.init();
    }
  }));

export interface IRootStore extends Instance<typeof RootStore> { }

export { RootStore };
