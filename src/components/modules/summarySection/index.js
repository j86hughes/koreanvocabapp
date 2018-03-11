import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SummaryPage extends Component {

  render() {
    const { incorrectWords, correctWords } = this.props;
    return (
      <div style={
        {
          textAlign: 'center',
          fontFamily: 'arial',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh'
        }}
      >
        <h1>Summary Page</h1>
        <li
          style={{listStyle: 'none'}}
        >
          <Link to='/'>Home</Link>
        </li>
      </div>
    )
  }

}

export default SummaryPage;
