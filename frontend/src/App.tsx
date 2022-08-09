import React from 'react';
import RoutesApp from './Routes';
import SalesProvider from './contexts/Sales';

function App() {
  return (
    <div>
      <SalesProvider>
        <RoutesApp/>
      </SalesProvider>
    </div>
  );
}

export default App;
