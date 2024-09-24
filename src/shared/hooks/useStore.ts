import { createContext, useContext } from 'react';
import { IRootStore } from '@stores/index';

const StoreContext = createContext<IRootStore>({} as IRootStore);

export const useStore = () => {
    return useContext(StoreContext);
};

export const StoreProvider = StoreContext.Provider;