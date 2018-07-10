import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Agree, About, Detail, Result } from 'pages';
import { Menu } from 'components';

class App extends Component {
  state = {
    agreeState: 0
  }
  render() {
    const { agreeState } = this.state;
    return (
      <div>
        <Menu Route={Route} />
        <Route exact path="/" component={Agree} />
        <Switch>
          <Route path="/about/:name" component={About} agree={agreeState} />
          <Route path="/about" component={About} agree={agreeState} />
          <Route path="/Detail" component={Detail} />
          <Route path="/Result" component={Result} />
        </Switch>
      </div>
    );
  }
}

export default App;