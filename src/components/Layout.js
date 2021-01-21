import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import Form from './InputForm'
import UserInfo from './UserInfo'

class Layout extends Component {
    
    render() {
        return(
        <div className="">
            <Header />
            <Form />
            <UserInfo />
            <Footer />
        </div>
        )
    }
}

export default Layout