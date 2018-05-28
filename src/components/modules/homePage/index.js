import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import vocab from '../../modules/vocab';
import * as CONSTANTS from '../questionSection/constants.js';
import styles from '../questionSection/styles';

class HomePage extends Component {

  componentDidMount() {
    const { updateVocabList } = this.props;
    updateVocabList([]);
  }

  onModeClickHandler() {
  	const { mode, changeMode } = this.props;
  	mode === CONSTANTS.KOREAN
  		? changeMode(CONSTANTS.ENGLISH)
  		: changeMode(CONSTANTS.KOREAN);
  }

  render() {
    const { updateVocabList, mode } = this.props;
    return (
      <div style={
        {
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          fontFamily: 'arial',
          minHeight: '100vh',
          backgroundColor: '#f2f7ff',
        }}
      >
        <h1>단어 연습</h1>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

          }}>

          <Button
            style={styles.changeModeButton}
            onClick={() => this.onModeClickHandler()}
          >
            {mode === CONSTANTS.KOREAN ? (
              CONSTANTS.KTOELABEL
            ) : (
              CONSTANTS.ETOKLABEL
            )}
          </Button>

          {vocab.map((item) => {
            return (
              <Link key={item.title} to='/questionsection' style={{textDecoration: 'none'}}>
                <Button
                  onClick={() => updateVocabList(item.vocab)}
                  style={{
                    maxWidth: 1000,
                    minWidth: 400,
                    backgroundColor: 'blue',
                    color: 'white',
                    marginBottom: 20,
                  }}
                  >
                  {item.title}
                </Button>
              </Link>
            )
          })}
        </div>

      </div>
    )
  }

}

export default HomePage;
