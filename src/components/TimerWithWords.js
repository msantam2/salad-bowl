import React from 'react';
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
    return (
      <p>in timer with words</p>
    );
  }
};

export default TimerWithWords;
