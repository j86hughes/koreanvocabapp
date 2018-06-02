import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

const SummaryPage = ({incorrectWords, score, totalWords, resetLists}) => (
  <div style={styles.container}>
    <h1>Summary Page</h1>
    <h3>{score} out of {totalWords}</h3>
    <h2>Incorrect words</h2>
    <div style={styles.wordListContainer}>
      {incorrectWords.map((wordObj) => {
        return (
          <div
            style={styles.wordContainer}
            index={wordObj.english[0]}
          >
            <p style={styles.leftWord}>{wordObj.korean[0]}</p>
            <p>{wordObj.english[0]}</p>
          </div>
        )
      })}
    </div>
    <Link to='/'>
      <Button onClick={() => resetLists()} style={styles.button}>
        Home
      </Button>
    </Link>
  </div>
)

SummaryPage.propTypes = {
  incorrectWords: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  totalWords: PropTypes.number.isRequired,
  resetLists: PropTypes.func.isRequired,
}

export default SummaryPage;
