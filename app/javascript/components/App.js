import React from "react"
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import HelloWorld from "./HelloWorld";
import Counter from "./Counter";

class App extends React.Component {
  render () {
    return (
      <Counter />
      // <BrowserRouter>
      //   <Switch>
      //     <Route exact path="/" render={() => "Home!"} />
      //     <Route path="/hello" render={() => <HelloWorld greeting="Friend" />} />
      //     <Route path="/counter" render={() => <Counter />} />
      //   </Switch>
      // </BrowserRouter>
    );
  }
}

export default App
