
import { useEffect } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from 'shared/styles/globalstyles';
import { useStore } from 'shared/hooks/useStore';
import { RatesList } from 'components/RatesList';
import { RatesItem } from 'components/RatesItem';

function App() {
  const { initApplication } = useStore();

  useEffect(() => {
    initApplication();
  },);

  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<RatesList />} />
          <Route path="/rate/:coin" element={<RatesItem />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
