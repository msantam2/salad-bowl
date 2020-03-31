import React from 'react';
import Countdown from 'react-countdown';
import NextRound from './NextRound';
import { getEntries } from '../helpers';
import { ButtonSize } from './common';

class Cycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entriesLoaded: false,
      date: Date.now() + 10000,
      entries: [],
      entryIndex: 0,
      completedEntries: {},
    };
  }

  componentDidMount() {
    const entries = getEntries();

    entries.then(values => {
      this.setState({
        entries: values,
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

    const { date, entries, entryIndex } = this.state;
    const currentEntry = entries[entryIndex];

    const renderer = ({ _hours, _minutes, seconds, completed }) => {
      if (completed) {
        return <p>completed!</p>;
        // if entries empty
          // <NextRound incrementRound={this.props.incrementRound} />;

        // if entries still there
          // run another cycle
      } else {
        return <p style={timerStyle}>{seconds}</p>;
      }
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

        <Countdown
          key={Date.now()}
          date={date}
          renderer={renderer}
        />
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
  margin: '0 auto',
  textAlign: 'center',
  fontSize: '50px'
};

export default Cycle;
