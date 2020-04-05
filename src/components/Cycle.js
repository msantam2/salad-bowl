import React from 'react';
import Countdown from 'react-countdown';
import { nextRound } from '../helpers';
import { ButtonSize } from './common';

class Cycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: Date.now() + 15000,
      entryIndex: 0,
    };

    this.createEntriesTracker();
  }

  createEntriesTracker() {
    let entriesTracker = {};
    const { entriesList } = this.props;

    for (let i = 0; i < entriesList.length; i++) {
      let entry = entriesList[i];
      entriesTracker[entry] = false;
    }

    this.entriesTracker = entriesTracker;
  }

  calculateNextIndex() {
    const nextIndex = this.state.entryIndex + 1;

    if (nextIndex === this.props.entriesList.length) {
      return 0;
    }

    return nextIndex;
  }

  skipEntry() {
    const nextIndex = this.calculateNextIndex();
    this.setState({ entryIndex: nextIndex });
  }

  nextEntry(entry) {
    this.entriesTracker[entry] = true;
    const nextIndex = this.calculateNextIndex();
    this.setState({ entryIndex: nextIndex });
  }

  getCurrentEntry() {
    const { entryIndex } = this.state;
    const { entriesList } = this.props;
    let entry = entriesList[entryIndex];

    // need to figure out end state of this loop
    while (this.entriesTracker[entry]) {
      let nextIndex = this.calculateNextIndex();
      entry = entriesList[nextIndex];
    }

    return entry;
  }

  render() {
    const currentEntry = this.getCurrentEntry();

    const onComplete = () => {
      // pass cycle results back up to CycleManager
      this.props.cycleNotReady();
    };

    return (
      <div style={containerStyle}>
        <div>
          <h1 style={entryStyle}>{currentEntry}</h1>

          <div style={buttonContainerStyle}>
            <ButtonSize
              style={{ border: 'none', backgroundColor: 'orange' }}
              onClick={() => this.skipEntry()}
              size='large'
              type='primary'
            >
              SKIP
            </ButtonSize>
            <ButtonSize
              style={{ border: 'none', backgroundColor: 'green' }}
              onClick={() => this.nextEntry(currentEntry)}
              size='large'
              type='primary'
            >
              NEXT
            </ButtonSize>
          </div>
        </div>

        <div style={timerStyle}>
          <Countdown
            key={Date.now()}
            date={this.state.date}
            onComplete={onComplete}
          />
        </div>

        <ButtonSize
          style={forceButtonStyle}
          onClick={() => this.props.cycleNotReady()}
          size='small'
          type='primary'
        >
          FORCE NEXT CYCLE
        </ButtonSize>
        <ButtonSize
          style={forceButtonStyle}
          onClick={() => nextRound()}
          size='small'
          type='primary'
        >
          FORCE NEXT ROUND
        </ButtonSize>
      </div>
    );
  }
};

const containerStyle = { textAlign: 'center' };

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  marginBottom: '10px',
};

const entryStyle = {
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '50px',
};

const timerStyle = {
  color: 'black',
  fontSize: '50px',
  textAlign: 'center',
};

const forceButtonStyle = {
  width: '60%',
  marginTop: '50px',
  border: 'none',
  backgroundColor: 'red',
  height: '45px',
}

export default Cycle;
