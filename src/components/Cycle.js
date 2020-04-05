import React from 'react';
import Countdown from 'react-countdown';
import * as d3 from 'd3-array';

import { getEntries, nextRound } from '../helpers';
import { ButtonSize } from './common';

class Cycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: Date.now() + 5000,
      entriesLoaded: false,
      entries: [],
      entryIndex: 0,
      completedEntries: {},
    };
  }

  componentDidMount() {
    const entries = getEntries();

    entries.then(values => {
      this.setState({
        entries: d3.shuffle(values),
        entriesLoaded: true,
      })
    });
  }

  skipEntry() {
    this.setState({ entryIndex: this.state.entryIndex + 1 });
  }

  nextEntry(entry) {
    const newCompletedEntry = { entry: true };

    this.setState({
      entryIndex: this.state.entryIndex + 1,
      completedEntries: {
        ...this.state.completedEntries,
        ...newCompletedEntry,
      },
    });
  }

  render() {
    if (!(this.state.entriesLoaded)) {
      return <h2>Retrieving the Salad Bowl…</h2>;
    }

    const { date, entries, entryIndex } = this.state;
    const currentEntry = entries[entryIndex];

    const onComplete = () => {
      // do work on entries

      // any left?
        // run another cycle

      // none left
        // ready for next round (NextRound component)
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
            date={date}
            onComplete={onComplete}
          />
        </div>

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
