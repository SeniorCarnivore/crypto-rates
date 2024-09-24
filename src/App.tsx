
import { useEffect } from 'react';

import { useStore } from 'shared/hooks/useStore';
import { RatesList } from 'components/RatesList';

function App() {
  const { initApplication } = useStore();

  useEffect(() => {
    initApplication();
  },);

  return (
    <div>
      {/* Sorry, no router for links yet. So this MVP uses "table" to display data */}
      <RatesList />
    </div>
  );
}

export default App;
