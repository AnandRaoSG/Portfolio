import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container'>
      <h5>Contact Me</h5>

      <div className='contact-content'>
        <div style={{ flex: 1 }}>

          <ContactInfoCard
            iconUrl='../Images/GM.png'
            text={<a href='mailto:aanandraosg@gmail.com'>aanandraosg@gmail.com</a>} />

          <ContactInfoCard
             iconUrl='../Images/GH.png'
            text={<a href='https://github.com/AnandRaoSG'>github.com/AnandRaoSG</a>} />

          <ContactInfoCard
            iconUrl='../Images/LinkedIn.png'
            text= {<a href='https://www.linkedin.com/in/anandraosg'>www.linkedin.com/in/anandraosg</a>} />

        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>

    </section>
  )
}

export default ContactMe