import React from 'react';
import Routes from './routes';
import Nav from './components/nav';
import Sidebar from './components/sidebar';

const App = () => {
  return (
    <div>
      <Nav />
      <div id="app-flex">
        <Sidebar />
        <Routes />
      </div>
    </div>
  );
};

export default App;
