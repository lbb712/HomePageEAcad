// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
import {
  contact_background_image,
  contact_title,
  small_rectangle,
  contact_form,
  form_box
} from '../components/layout.module.css'


// Step 2: Define your component
const Contact = () => {
  return (
    <Layout pageTitle="Contact Us">
      <div className={contact_background_image}>
      </div>
      <div className={contact_title}>
        <p style={{ color: 'white' }}><b>Contact Us</b></p>
        <div className={small_rectangle}></div>
        <p style={{ color: 'bistre'}}>Call us on: <b>8421503536</b></p>
        <p style={{ color: 'bistre'}}>contact@eacad.org</p>
      </div>
      <div className={contact_form}>
        <div className={form_box}>
          <p>Name</p>
        </div>
        <div className={form_box}>
          <p>Mobile Number</p>
        </div>
        <div className={form_box}>
          <p>Email</p>
        </div>
        <div className={form_box}>
          <p>Message</p>
        </div>
      </div>
    </Layout>
  )
}
// Step 3: Export your component
export default Contact