import React from 'react';
import * as d3 from 'd3-array';
import Cycle from './Cycle';
import { PlayButton } from './common';
import { getEntries } from '../helpers';

class CycleManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cycleReady: false, entriesList: [] };
  }

  componentDidMount() {
    const entries = getEntries();

    entries.then(values => {
      this.setState({ entriesList: d3.shuffle(values) });
    });
  }

  cycleReady() {
    this.setState({ cycleReady: true });
  }

  cycleNotReady(entriesCompletedTracker) {
    let stillInBowl = [];

    for (let key in entriesCompletedTracker) {
      if (entriesCompletedTracker.hasOwnProperty(key)) {
        if (!(entriesCompletedTracker[key])) {
          stillInBowl.push(key);
        }
      }
    }


    
    this.setState({ cycleReady: false });
  }

  render() {
    if (!(this.state.cycleReady)) {
      return (
        <PlayButton playFunc={this.cycleReady.bind(this)}>
          START CYCLE
        </PlayButton>
      );
    }

    return (
      <Cycle
        key={Date.now()}
        cycleNotReady={this.cycleNotReady.bind(this)}
        entriesList={this.state.entriesList}
      />
    );
  }
};

export default CycleManager;
