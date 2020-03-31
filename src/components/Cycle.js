import React from 'react';
import Countdown from 'react-countdown';
import * as d3 from 'd3-array';
import NextRound from './NextRound';
import { getEntries } from '../helpers';
import { ButtonSize } from './common';

class Cycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entriesLoaded: false,
      date: Date.now() + 500000,
      entries: [],
      entryIndex: 0,
      completedEntries: {},
      readyForNextRound: false,
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
      return <h2>Loading the Salad Bowl…</h2>;
    }

    if (this.state.readyForNextRound) {
      return <NextRound incrementRound={this.props.incrementRound} />;
    }

    const { date, entries, entryIndex } = this.state;
    const currentEntry = entries[entryIndex];

    const onComplete = () => {
      this.setState({ readyForNextRound: true });
      // do work on entries

      // any left?
        // run another cycle

      // none left
        // update state that we are ready for next round
    };

    return (
      <div>
        <div>
          <h1 style={entryStyle}>{currentEntry}</h1>

          <div style={buttonContainerStyle}>
            <ButtonSize
              style={{ border: 'none', backgroundColor: 'orange' }}
              onClick={() => this.skipEntry()}
              size={'large'}
              type={'primary'}
            >
              SKIP
            </ButtonSize>
            <ButtonSize
              style={{ border: 'none', backgroundColor: 'green' }}
              onClick={() => this.nextEntry(currentEntry)}
              size={'large'}
              type={'primary'}  
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
      </div>
    );

  }
};


const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  marginBottom: '100px',
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

export default Cycle;
