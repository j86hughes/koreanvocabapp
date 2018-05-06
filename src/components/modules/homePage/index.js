import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import vocab from '../../modules/vocab';
import GrammarTron from '../grammar/grammartron';

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
        <GrammarTron />
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',

          }}>
          {vocab.map((item) => {
            return (
              <Link to='/questionsection' style={{textDecoration: 'none'}}>
                <Button
                  onClick={() => updateVocabList(item.vocab)}
                  style={{
                    maxWidth: 1000,
                    minWidth: 400}}
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
