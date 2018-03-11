import React from 'react';
import QuestionSection from '../questionSection';
import HomePage from '../home';
import SummaryPage from '../summary';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

const Mothership = () => {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route path='/questionsection' component={QuestionSection}/>
      <Route path='/summary' component={SummaryPage}/>
    </div>
  )
}

export default withRouter(Mothership);
