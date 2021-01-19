import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import Form from './Form'

class Layout extends Component {
    
    render() {
        return(
        <div className="">
            <Header />
            <Form setDetails={this.props.setDetails}/> 
            <Footer />
        </div>
        )
    }
}

export default Layout