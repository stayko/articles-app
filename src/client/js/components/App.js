import React from 'react';
import ReactDOM from 'react-dom';
import ContainerArticlesList from './ContainerArticlesList';
import ContainerArticleView from './ContainerArticleView';
import { Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return  <div className="app">
              <Route component={ContainerArticlesList}/>
              <Route path="/view/:articleId" component={ContainerArticleView}/>
            </div>
  }
}

export default App;
