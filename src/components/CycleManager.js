import React from 'react';
import * as d3 from 'd3-array';
import Cycle from './Cycle';
import { PlayButton } from './common';
import { getEntries, updateBowl } from '../helpers';

class CycleManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cycleReady: false,
      entriesList: [],
    };
  }

  cycleReady() {
    const entries = getEntries();

    entries.then(values => {
      const filteredEntries = this.filterEntries(values);

      this.setState({
        entriesList: d3.shuffle(filteredEntries),
        cycleReady: true,
      });
    });
  }

  filterEntries(entries) {
    // entries =>
    // [{ entry: 'a-1', completed: false }, { entry: 'b-2', completed: true }]

    let filteredEntries = [];

    for (let i = 0; i < entries.length; i++) {
      let entryData = entries[i];
      let entry = entryData['entry'];
      let completed = entryData['completed'];

      if (!completed) {
        filteredEntries.push(entry);
      }
    }

    return filteredEntries;
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
