import React from "react";
import ReactDOM from "react-dom";
import {Router,Route,browserHistory} from "react-router";

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

class Hello1 extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello1</h1>
      </div>
    )
  }
}

class Hello2 extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello2</h1>
      </div>
    )
  }
}

const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/hello1' component={Hello1} />
    <Route path='/hello2' component={Hello2} />
  </Router>
);

ReactDOM.render(renderRoutes(),document.getElementById('root'));
