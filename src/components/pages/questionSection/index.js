import React, { Component } from 'react';
import { QuestionPage } from '../../../redux/modules/superReducer/container';

class QuestionSectionPage extends Component {
  render() {
    return (
      <div>
        <QuestionPage history={this.props.history}/>
      </div>
    )
  }
}

export default QuestionSectionPage;
