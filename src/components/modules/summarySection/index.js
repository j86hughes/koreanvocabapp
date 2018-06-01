import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

class SummaryPage extends Component {
  render() {
    const { incorrectWords, score, totalWords, resetLists } = this.props;
    return (
      <div style={
        {
          textAlign: 'center',
          fontFamily: 'arial',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#f2f7ff',
        }}
      >
        <h1>Summary Page</h1>
        <h3>{score} out of {totalWords}</h3>
        <h2>Incorrect words</h2>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          {incorrectWords.map((wordObj) => {
            return (
              <div
                style={{display: 'flex', flexDirection: 'row'}}
                index={wordObj.english[0]}
              >
                <p style={{marginRight: 20}}>{wordObj.korean[0]}</p>
                <p>{wordObj.english[0]}</p>
              </div>
            )
          })}
        </div>
        <li
          style={{listStyle: 'none'}}
        >
          <Link to='/'>
            <Button
              onClick={() => resetLists()}
              style={{
                maxWidth: 1000,
                minWidth: 400,
                backgroundColor: 'blue',
                color: 'white',
                marginBottom: 20,
              }}
              >
              Home
            </Button>
          </Link>
        </li>
      </div>
    )
  }

}

export default SummaryPage;
