import React from 'react';
import './App.css';
import Test from "./view/proson"
import Cs from './components/cs'
import RouterNav from './components/router-nav'
import {Route, Switch, BrowserRouter} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <RouterNav></RouterNav>
        <Switch>
          <Route exact path="/" component={Test}></Route>
          <Route exact path="/cs/:id/:name" component={Cs}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;


/**
 * HashRouter：有 # 号
 * BrowserRouter：无 # 号
 * 使用 hashHistory，浏览器的 url 是这样的：/#/user/liuna?_k=adseis
 * 使用 browserHistory，浏览器的 url 是这样的：/user/liuna
 */