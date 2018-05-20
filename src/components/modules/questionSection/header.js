import React from 'react';
import Progress from 'react-progressbar';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import textToSpeech from '../textToSpeech';
import * as CONSTANTS from './constants';
import styles from './styles';

const header = ({score, totalWords, mode, currentWord, answerAttempt, progressPercentage, returnOtherMeanings}) => (
  <header style={styles.appHeader}>
    <div style={{flexGrow: 2}}>
      <h3 style={styles.scoreText}>
        SCORE: {score} / {totalWords}
      </h3>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={styles.vocabBox}>
          <h1 style={{ fontSize: 50 }}>
            {mode === CONSTANTS.KOREAN ? (
              currentWord.korean[0]
            ) : (
              currentWord.english[0]
            )}
          </h1>

          {answerAttempt === CONSTANTS.CORRECT && (
            <Icon className="material-icons" style={styles.correctAnswer}>
              done
            </Icon>
          )}
          {answerAttempt === CONSTANTS.INCORRECT && (
            <Icon className="material-icons" style={styles.incorrectAnswer}>
              clear
            </Icon>
          )}
        </div>
        {returnOtherMeanings().length > 0 && (
          <p>
            (not: {returnOtherMeanings().map(word => {
              const showComma = returnOtherMeanings().length > 1 ? ',' : '';
              return (
                ` ${word}${showComma}`
              )})}
            )
          </p>
        )}
      </div>
      {answerAttempt === CONSTANTS.INCORRECT && (
        <h2>
          {mode === CONSTANTS.KOREAN ? (
            currentWord.english[0]
          ) : (
            currentWord.korean[0]
          )}
        </h2>
      )}
    </div>
    <div>
      <Button
        style={{ color: 'gray' }}
        onClick={() => textToSpeech(currentWord.korean)}
      >
        <Icon className="material-icons" style={{ color: 'gray' }}>
          volume_up
        </Icon>
      </Button>
      <Progress completed={progressPercentage} />
    </div>
  </header>
)

export default header;
