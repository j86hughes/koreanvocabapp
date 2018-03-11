import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import vocab from '../../modules/vocab';

class HomePage extends Component {

  componentDidMount() {
    const { updateVocabList } = this.props;
    updateVocabList([]);
  }

  render() {
    const { updateVocabList } = this.props;
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
        <h1>단어 연습</h1>
        <li
          style={{listStyle: 'none'}}
          onClick={() => updateVocabList(vocab.basicVerbs)}
        >
          <Link to='/questionsection'>Basic verbs 1</Link>
        </li>
        <li
          style={{listStyle: 'none'}}
          onClick={() => {
            updateVocabList(vocab.greetings)
          }}
        >
          <Link to='/questionsection'>Greetings</Link>
        </li>
      </div>
    )
  }

}

export default HomePage;
