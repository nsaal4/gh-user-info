import React, {Component} from 'react'
import 'materialize-css'
import Layout from './components/Layout'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
 
  componentDidMount() {

  }

  setDetails(details) {
    this.setState({
      name: details.userName,
    })
  }

  render() {
    return(
      <div className="center">
        <Layout setDetails={this.setDetails.bind(this)}/>
      </div>
    )
  }
}

export default App