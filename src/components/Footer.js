import React, {Component} from 'react'

class Footer extends Component {
    render() {
        const year = new Date().getFullYear()
        return(
         <footer>
             Copyright &copy; {year} nsaal4
         </footer>
        )
    }
}

export default Footer