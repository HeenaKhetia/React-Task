import React from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Content from './components/content/Content'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.scss';

function App() {
  return (
    <div class="root">
      <Router>
        <div class="flex-shrink">
        <Header></Header>
        </div>
        <div class="flex-expand">
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route path="/:content" component={Content} />
        </Switch>
        </div>
        <div class="flex-shrink">
        <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
