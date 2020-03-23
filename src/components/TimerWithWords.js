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
    let entries = this.state.entries;

    if (entries.length === 0) {
      return <h2>Be patient…</h2>;
    } else {
      
    }
  }
};

export default TimerWithWords;
