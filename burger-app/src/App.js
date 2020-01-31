import React from 'react';
import './App.css';

import Layout from './components/Layout'
import BurgerBuilder from './components/BurgerBuilder'

function App() {
  return (
    <div className="">
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
