import React from 'react';
import './App.css';
import SBForm from './components/SBForm';
import { Alert } from 'antd';

const App = () => {
  return (
    <div className='app'>
      <Alert
        message="Salad Bowl"
        description="Welcome to Salad Bowl, where you will have endless fun and maybe, just maybe, find yourself in the process. Good luck."
        type="info"
        showIcon
      />

      <SBForm />
    </div>
  );
}

export default App;
