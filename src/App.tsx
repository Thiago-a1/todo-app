import React from 'react';

import { ThemeProvider } from './contexts/ThemeContext';

import { Dashboard } from "./components/Dashboard";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
