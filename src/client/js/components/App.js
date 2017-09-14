import React from 'react';
import ReactDOM from 'react-dom';
import ArticlesContainer from '../containers/ArticlesContainer';
import ViewContainer from '../containers/ViewContainer';
import { Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return  <div className="app">
              <Route component={ArticlesContainer}/>
              <Route path="/view/:articleId" component={ViewContainer}/>
            </div>
  }
}

export default App;
