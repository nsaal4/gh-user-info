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

  userDetails = () => {
  
  }

  render() {
    return(
      <div className="center">
        <Layout userDetails={this.userDetails}/>
      </div>
    )
  }
}

export default App