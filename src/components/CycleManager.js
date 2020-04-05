import React from 'react';
import { PlayButton } from './common';
import Cycle from './Cycle';

class CycleManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cycleReady: false };
  }

  cycleReady() {
    this.setState({ cycleReady: true });
  }

  cycleNotReady() {
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
      />
    );
  }
};

export default CycleManager;
