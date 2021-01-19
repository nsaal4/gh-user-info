import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
          userName: "",
          age: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

    handleChange(e) {
        const name = e.target.name
        const value = e.target.value

        this.setState({
          [name]: value
        })
    }

    handleSubmit(e) {
        // alert(this.state.userName)
        this.props.setDetails({
            userName: this.state.userName,
            age: this.state.age})
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="" placeholder="Enter Username" name="userName" value={this.state.userName} 
                    onChange={this.handleChange}/>
                    <input type="number" className="" placeholder="Enter Age" name="age" value={this.state.age} 
                    onChange={this.handleChange}/>
                    <button type="submit" className="btn btn-small">Fetch Data</button>
                </form>

                <h5>User Information</h5>
                <h6>Name from Input: {this.state.userName}</h6>
                <h6>Age from Input: {this.state.age}</h6>
                <h6>Name from App Component: {this.props.name}</h6>
            </div>         
        )
    }
}

export default Form
