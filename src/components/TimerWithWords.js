import React from 'react';
import Countdown from 'react-countdown';
import NextRound from './NextRound';
import { ButtonSize } from './common';
import { getEntries } from '../helpers';

class TimerWithWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entries: [] };
  }

  componentDidMount() {
    const entries = getEntries();
    entries.then(values => this.setState({ entries: values }));
  }

  render() {
    let { entries } = this.state;

    if (entries.length === 0) {
      return <h2>Loading the Salad Bowl…</h2>;
    } else {
      const renderer = ({ _hours, _minutes, seconds, completed }) => {
        if (completed) {
          // if bowl is empty
            // increment round
          return <NextRound incrementRound={this.props.incrementRound} />;

          // if bowl not empty
            // start another cycle until bowl is empty
        } else {
          return (
            <p style={timerStyle}>{seconds}</p>
          );
        }
      };


      return (
        <div>
          <Countdown
            key={Date.now()}
            date={Date.now() + 3000}
            renderer={renderer}
          />
        </div>
      );
    }
  }
};

const timerStyle = {
  margin: '0 auto',
  textAlign: 'center',
  fontSize: '50px'
};

export default TimerWithWords;
