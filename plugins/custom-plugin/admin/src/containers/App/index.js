/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

//old App component
/*import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from 'strapi-helper-plugin';
// Utils
import pluginId from '../../pluginId';
// Containers
import HomePage from '../HomePage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;*/

import React, { Component } from 'react';
import axios from 'axios'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {emailAddress: '', emailBody: ''};
  }
  handleChange = (event) => {

    axios.post('http://localhost:1337/email/create', {
      emailAddress: this.state.emailAddress,
      emailBody: this.state.emailBody
    }).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    event.preventDefault();
  }
  bindEmailEvent = (event) => {
    this.setState({emailAddress: event.target.value});
  }
  bindBodyEvent = (event) => {
    this.setState({emailBody:event.target.value})
  }

  render() {
    return (
      <div className="App container pt-5">
        <h2>My Email list plugin</h2>
        <p>{this.state.value}</p>
        <form onSubmit={this.handleChange}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input type="email" className="form-control" value={this.state.emailAddress} onChange={this.bindEmailEvent} placeholder="name@example.com"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
            <textarea className="form-control" value={this.state.emailBody} onChange={this.bindBodyEvent} rows="3"/>

          </div>
          <button type="submit" className="btn btn-primary">Send Email</button>
        </form>

      </div>
    );
  }
}
export default App;
