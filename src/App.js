import React, {Component} from 'react'
import 'materialize-css'
import Layout from './components/Layout'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      age: ""
    }
  }
 
  componentDidMount() {

  }

  setDetails(details) {
    this.setState({
      name: details.userName,
      age: details.age
    })
  }

  render() {
    return(
      <div className="center">
        <h6>Details from Layout Component: {this.state.name}, {this.state.age}</h6>
        <Layout setDetails={this.setDetails.bind(this)}/>
      </div>
    )
  }
}

export default App