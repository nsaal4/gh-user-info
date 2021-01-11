import React, {Component} from 'react';
import 'materialize-css';
import Projects from './components/Projects';
import Api from './components/Api';

class App extends Component {
  render() {
    return(
      <div className="center">
        <h3>My React App</h3>
        <Projects name="Hello JS Developer"/>
        <Api />
      </div>
    )
  }
}

export default App;