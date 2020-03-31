import React from 'react';
import Countdown from 'react-countdown';
import { ButtonSize } from './common';
import { getEntries } from '../helpers';

class TimerWithWords extends React.Component {
  constructor(props) {
    super(props);

    // this.props.incrementRound

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
          return <h2>Timer completed</h2>;
        } else {
          return (
            <p style={timerStyle}>{seconds}</p>
          );
        }
      };

      return (
        <div>
          <Countdown
            date={Date.now() + 5000}
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
