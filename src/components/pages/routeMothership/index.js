import React from 'react';
import {
  QuestionPage,
  HomePage,
  SummaryPage
} from '../../../redux/modules/superReducer/container';

import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

const Mothership = () => {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route path='/questionsection' component={QuestionPage}/>
      <Route path='/summary' component={SummaryPage}/>
    </div>
  )
}

export default withRouter(Mothership);
