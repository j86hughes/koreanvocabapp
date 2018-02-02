import React from 'react';
const KOREAN = 'korean';

const vocabBox = (props) => {
  <header style={styles.appHeader}>
    <h3 style={styles.scoreText}>
      SCORE: {score} / {total}
    </h3>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h1 style={{fontSize: 50}}>{mode === KOREAN ? currentWord.korean : currentWord.english}</h1>
      {answerAttempt === 'correct' && <Icon className="material-icons" style={{color: 'lightGreen', fontSize: '50pt'}}>done</Icon>}
      {answerAttempt === 'incorrect' && <Icon className="material-icons" style={{color: 'red', fontSize: '50pt'}}>clear</Icon>}
    </div>
    <Button
      style={{color: 'gray'}}
      onClick={() => textToSpeech(currentWord.korean)}>
      <Icon className="material-icons" style={{color: 'gray'}}>volume_up</Icon>
    </Button>
  </header>
}
