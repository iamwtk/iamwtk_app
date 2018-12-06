import React, { Component } from 'react'
import axios from 'axios'
import ContactForm from './contact/ContactForm'
import ContactInfo from './contact/ContactInfo'
import Title from './Title'
import css from './contact/contact.scss'




class Contact extends Component {    
    state = {
        error: null,
        success: null
    }
    onFormSubmitHandler = async ({ fields, isValid }) => {

        if (isValid) {
            try {                
                const response = await axios.post('/api/mailer/contact-form', fields)

                if (response) 
                    this.setState({error: null, success: response.data.message}) 
                

            } catch(err) {  
                console.log(new Error({ statusText: 'error' }))
                const errMessage = err.response && err.response.statusText ? err.response.statusText : 'Server Error'
                this.setState({error: errMessage})                
            }
        }          
    }
    render() {       
        return (            
            <section className={css.Contact}>
                <Title text={'CONTACT'}/>
                <div className={css.row}>
                    <ContactForm 
                        error={this.state.error} 
                        success={this.state.success}
                        onSubmitHandler={this.onFormSubmitHandler}                        
                    />
                    <ContactInfo/>
                </div>
            </section>
        )
    }
}

export default Contact

