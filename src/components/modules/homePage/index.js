import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import vocab from '../../modules/vocab';
import shuffleArray from '../../../redux/utils/shuffleArray';
import * as CONSTANTS from '../questionSection/constants.js';
import styles from './styles';

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
    const { updateVocabList, mode, setMultiMode, multiMode } = this.props;
    return (
      <div style={styles.container}>
        <h1>단어 연습</h1>
        <div style={styles.insideContainer}>
          <div style={styles.optionButtonsContainer}>
            <Button
              style={styles.changeModeButton}
              onClick={() => this.onModeClickHandler()}
            >
              {mode === CONSTANTS.KOREAN
                ? CONSTANTS.KTOELABEL
                : CONSTANTS.ETOKLABEL}
            </Button>

            <Button
              style={styles.changeModeButton}
              onClick={() => setMultiMode(!multiMode)}
            >
              {multiMode ? 'Easy' : 'Difficult'}
            </Button>
          </div>

          {vocab.map(item => {
            return (
              <Link
                key={item.title}
                to="/questionsection"
                style={styles.listStyle}
              >
                <Button
                  onClick={() => updateVocabList(shuffleArray(item.vocab))}
                  style={styles.vocabListButton}
                >
                  {item.title}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomePage;
