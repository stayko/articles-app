import React from 'react';
import ReactDOM from 'react-dom';
import ArticlesList from './ArticlesList';
import ArticleView from './ArticleView';
import { Route } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return  <div className="app">
              <ArticlesList />
              <Route path="/view/:id" component={ArticleView}/>
            </div>
  }
}

export default App;
