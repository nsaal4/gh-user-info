import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
          userName: ""
        }

        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
      }

    handleChange = (e) => {
        const userName = e.target.value
        this.setState({userName})
    }

    handleSubmit = (e) => {
        alert(`Welcome ${this.state.userName.toUpperCase()}`)
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="" placeholder="Enter Username" name="userName" value={this.state.userName} 
                    onChange={this.handleChange}/>
                    <button type="submit" className="btn btn-small">Fetch Data</button>
                </form>
            </div>         
        )
    }
}

export default Form
