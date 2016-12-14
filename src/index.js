import React from "react";
import ReactDOM from "react-dom";
import {Router,Route,browserHistory,Link} from "react-router";

class App extends React.Component{
  render(){
    return(
      <div>
        <Link to='/hello1'>Hello1</Link><br/>
        <Link to='/hello2'>Hello2</Link><br/>
      </div>
    )
  }
}

class Hello1 extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello1</h1>
        <Link to='/'>Hello</Link><br/>
        <Link to='/hello1'>Hello1</Link><br/>
        <Link to='/hello2'>Hello2</Link><br/>
      </div>
    )
  }
}

class Hello2 extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello2</h1>
        <Link to='/'>Hello</Link><br/>
        <Link to='/hello1'>Hello1</Link><br/>
        <Link to='/hello2'>Hello2</Link><br/>
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
