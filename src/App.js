import React from 'react';
import './App.css';
import Test from "./view/proson"
import Cs from './components/cs'
import RouterNav from './components/router-nav'
import NavBar from './components/nav-bar'
// import AnimatedSwitch from './components/animatedSwitch'
import { Route, BrowserRouter } from 'react-router-dom';
import AnimatedRouter from 'react-animated-router';

import BlueTab from './components/Tab/blueTab'
import RedTab from './components/Tab/redTab'
import GreenTab from './components/Tab/greenTab'
import YellowTab from './components/Tab/yellowTab'
import Subpage from './view/demo/test6'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <RouterNav></RouterNav>
        <AnimatedRouter>
          <Route exact path="/" component={Test}></Route>
          <Route exact path="/cs/:id/:name" component={Cs}></Route>
          <Route exact path="/blueTab" component={BlueTab}></Route>
          <Route exact path="/redTab" component={RedTab}></Route>
          <Route exact path="/greenTab" component={GreenTab}></Route>
          <Route exact path="/yellowTab" component={YellowTab}></Route>
          <Route exact path="/subpage" component={Subpage}></Route>
        </AnimatedRouter>
        <NavBar></NavBar>
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