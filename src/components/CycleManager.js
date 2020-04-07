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
      docIds: [],
      cycleResults: [],
    };
  }

  cycleReady() {
    const entries = getEntries();

    entries.then(values => {
      const filteredEntries = this.filterEntries(values);
      const docIds = this.listDocIds(values);

      this.setState({
        cycleReady: true,
        entriesList: d3.shuffle(filteredEntries),
        docIds: docIds,
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

  listDocIds(entries) {
    // entries =>
    // [{ entry: 'a-1', completed: false }, { entry: 'b-2', completed: true }]

    let docIds = [];

    for (let i = 0; i < entries.length; i++) {
      let entryData = entries[i];
      let entry = entryData['entry'];
      docIds.push(entry);
    }

    return docIds;
  }

  cycleNotReady(entriesCompletedTracker) {
    let completed = [];

    for (let key in entriesCompletedTracker) {
      if (entriesCompletedTracker.hasOwnProperty(key)) {
        if (entriesCompletedTracker[key]) {
          completed.push(key);
        }
      }
    }

    updateBowl(completed);
    this.setState({ cycleReady: false, cycleResults: completed });
  }

  formatResults(results) {
    return results.map((result) => {
      const split = result.split('-');
      return split.splice(0, split.length - 1).join('-');
    })
      .join(', ');
  }

  render() {
    if (!(this.state.cycleReady)) {
      const formattedResults = this.formatResults(this.state.cycleResults);

      return (
        <div>
          <p style={{ fontWeight: 'bold' }}>
            {formattedResults}
          </p>
          <PlayButton playFunc={this.cycleReady.bind(this)}>
            START CYCLE
          </PlayButton>
        </div>
      );
    }

    return (
      <Cycle
        key={Date.now()}
        cycleNotReady={this.cycleNotReady.bind(this)}
        entriesList={this.state.entriesList}
        docIds={this.state.docIds}
      />
    );
  }
};

export default CycleManager;
