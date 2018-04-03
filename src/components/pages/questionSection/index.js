import React, { Component } from 'react';
import { QuestionPage } from '../../../redux/modules/superReducer/container';

class QuestionSectionPage extends Component {
  render() {
    return <QuestionPage history={this.props.history}/>
  }
}

export default QuestionSectionPage;
