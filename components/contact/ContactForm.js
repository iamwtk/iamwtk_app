import React from 'react'
import PropTypes from 'prop-types'
import { FormValidation } from 'calidation'

import css from './contactForm/contactForm.scss'

const config = {
    name: {
        isRequired: 'Name is required.'
    },
    email: {
        isRequired: 'Email is required.',
        isEmail: 'Please enter valid email address.'
    },
    message: {
        isRequired: 'Message is required.'
    }
}

const ContactForm = ({ onSubmitHandler, error, success }) => (
    <div className={css.ContactForm}>      
        <FormValidation onSubmit={onSubmitHandler} config={config}>
            {({ fields, errors, submitted }) => (
                <>  
                    {error ? <p className={css.submitError}>{error}</p> : null}
                    {success ? <p className={css.submitSuccess}>{success}</p> : null}
                    
                    <div className={css.formGroup}>
                        <input                    
                            placeholder="Name"
                            name='name'
                            value={fields.name}
                            //blank function to fix react warning - onChange is managed by FormValidation component
                            onChange={()=>{}}                    
                        />
                        {submitted && errors.name && <span>{errors.name}</span>}
                    </div>

                    <div className={css.formGroup}>
                        <input
                            placeholder="Email"
                            name='email'
                            value={fields.email}
                            //blank function to fix react warning - onChange is managed by FormValidation component
                            onChange={()=>{}}
                        />
                        {submitted && errors.email && <span>{errors.email}</span>}
                    </div>

                    <div className={css.formGroup}>
                        <textarea
                            placeholder="Message"
                            name='message'
                            value={fields.message}
                            //blank function to fix react warning - onChange is managed by FormValidation component
                            onChange={()=>{}}
                        >
                        </textarea>
                        {submitted && errors.message && <span>{errors.message}</span>}
                    </div>
                    
                    <button>Send</button>
                </>
            )}
        </FormValidation>
    </div>
)

ContactForm.propTypes = {
   onSubmitHandler: PropTypes.func.isRequired,
   success: PropTypes.node,
   error: PropTypes.node
}

export default ContactForm
