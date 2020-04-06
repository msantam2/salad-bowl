import React from 'react';
import * as d3 from 'd3-array';
import Cycle from './Cycle';
import { PlayButton } from './common';
import { getEntries } from '../helpers';

class CycleManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cycleReady: false,
      entriesList: [],
    };

    this.initialFetch = true;
  }

  cycleReady() {
    const entriesToFetch = this.initialFetch ? 'all' : 'still in bowl';
    const entries = getEntries(entriesToFetch);

    entries.then(values => {
      this.initialFetch = false;
      this.setState({
        entriesList: d3.shuffle(values),
        cycleReady: true,
      });
    });
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

    // push stilInBowl to still_in_bowl collection
    

    // nest this inside
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
