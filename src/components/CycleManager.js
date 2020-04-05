import React from 'react';
import { PlayButton } from './common';
import Cycle from './Cycle';

class CycleManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cycleReady: false,
      firstCycle: true,
    };
  }

  cycleReady() {
    this.setState({ cycleReady: true });
  }

  render() {
    if (!(this.state.cycleReady)) {
      return (
        <PlayButton playFunc={this.cycleReady.bind(this)}>
          START CYCLE
        </PlayButton>
      );
    }

    return <p>CycleManager</p>
  }
};

export default CycleManager;
