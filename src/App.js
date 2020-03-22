import React from 'react';
import './App.css';
import { ButtonSize } from './components/common';
import { Alert } from 'antd';
import listenForVoiceInput from './ListenForVoiceInput';

const App = () => {
  const message     = "You have started mic"
  const description = "Please refresh app to start over" 

  return (
    <div className='app'>
      <Alert
        message="Rainbarrel (Voice Input)"
        description="Welcome to Rainbarrel, where you will use the power of your voice to view beautiful photos sent just to you from all around the world."
        type="info"
        showIcon
      />

      <div className='btn-container'>
        <button id='previous' disabled={true}>Previous</button>
        <button id='next' disabled={true}>Next</button>
      </div>

      <div className='start-container'>
        <ButtonSize
          id='start'
          onClick={listenForVoiceInput}
          size='large'
          type='dashed'
        >
          Start Mic
        </ButtonSize>
      </div>

      <div className='alert-container' hidden={true}>
        <Alert
          closable='true'
          message={message}
          description={description}
          type="info"
        />
      </div>
    </div>
  );
}

export default App;
