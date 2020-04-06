import React from 'react';
import Countdown from 'react-countdown';
import { nextRound } from '../helpers';
import { ButtonSize } from './common';

class Cycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: Date.now() + 60000,
      entryIndex: 0,
      roundCompleted: false,
    };

    this.createEntriesCompletedTracker();
  }

  createEntriesCompletedTracker() {
    let entriesCompletedTracker = {};
    const { entriesList } = this.props;

    for (let i = 0; i < entriesList.length; i++) {
      let entry = entriesList[i];
      entriesCompletedTracker[entry] = false;
    }

    this.entriesCompletedTracker = entriesCompletedTracker;
  }

  skipEntry() {
    this.goToCorrectNextIndex();
  }

  completeEntry(entry) {
    this.entriesCompletedTracker[entry] = true;
    const roundCompleted = this.checkIfRoundCompleted();

    if (roundCompleted) {
      this.setState({ roundCompleted: true });
    } else {
      this.goToCorrectNextIndex();
    }
  }

  goToCorrectNextIndex() {
    let nextIndex = this.state.entryIndex + 1;

    if (nextIndex === this.props.entriesList.length) {
      nextIndex = 0;
    }

    let nextEntry = this.props.entriesList[nextIndex];
    let nextEntryAlreadyCompleted = this.entriesCompletedTracker[nextEntry];

    while (nextEntryAlreadyCompleted) {
      nextIndex += 1;

      if (nextIndex === this.props.entriesList.length) {
        nextIndex = 0;
      }

      nextEntry = this.props.entriesList[nextIndex];
      nextEntryAlreadyCompleted = this.entriesCompletedTracker[nextEntry];
    }

    this.setState({ entryIndex: nextIndex });
  }

  checkIfRoundCompleted() {
    const completedStatuses = Object.values(this.entriesCompletedTracker);

    for (let i = 0; i < completedStatuses.length; i++) {
      let completed = completedStatuses[i];
      
      if (!completed) {
        return false;
      }
    }

    return true;
  }

  getCurrentEntry() {
    const { entryIndex } = this.state;
    const { entriesList } = this.props;

    let entry = entriesList[entryIndex];
    return entry;
  }

  formatEntry(entry) {
    let formattedEntry = entry.split('-');
    formattedEntry = formattedEntry.splice(0, formattedEntry.length - 1).join('-');
    return formattedEntry;
  }

  render() {
    if (this.state.roundCompleted) {
      return (
        <ButtonSize
          style={buttonStyle}
          onClick={() => nextRound()}
          size='large'
          type='primary'
        >
          DONE! Play Next Round
        </ButtonSize>
      );
    }

    const currentEntry = this.getCurrentEntry();
    let formattedEntry = this.formatEntry(currentEntry);

    const onComplete = () => {
      this.props.cycleNotReady(this.entriesCompletedTracker);
    };

    return (
      <div style={containerStyle}>
        <div>
          <h1 style={entryStyle}>{formattedEntry}</h1>

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
              onClick={() => this.completeEntry(currentEntry)}
              size='large'
              type='primary'
            >
              WE GOT IT!
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
          style={buttonStyle}
          onClick={() => this.props.cycleNotReady(this.entriesCompletedTracker)}
          size='small'
          type='primary'
        >
          FORCE NEXT CYCLE
        </ButtonSize>
        <ButtonSize
          style={buttonStyle}
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

const buttonStyle = {
  width: '75%',
  marginTop: '50px',
  border: 'none',
  backgroundColor: 'red',
  height: '45px',
}

export default Cycle;
