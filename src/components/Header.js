import React, {Component} from 'react'

class Header extends Component {
    render() {
        const today = Date()
        return(
         <header>
            <h3>My React App</h3>
            <h6>{today}</h6>
            <h5>Github's User Details</h5>
         </header>
        )
    }
}

export default Header