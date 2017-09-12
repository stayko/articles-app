import React from 'react';
import ReactDOM from 'react-dom';
import ContainerArticlesList from './ContainerArticlesList';
import ArticleView from './ArticleView';
import { Route } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return  <div className="app">
              <ContainerArticlesList />
              <Route path="/view/:id" component={ArticleView}/>
            </div>
  }
}

export default App;
