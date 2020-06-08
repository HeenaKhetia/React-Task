import React from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Content from './components/content/Content'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.scss';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:content" component={Content} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
