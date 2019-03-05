// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import ReactGA from 'react-ga'
// import fetch from 'isomorphic-fetch'
import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

 
const url = "https://docforce.us18.list-manage.com/subscribe/post?u=e0b5e0e9184aac4a519b8f36a&amp;id=a7b7e67ab6"

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

// use the render prop and your custom form
const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    // render={({ subscribe, status, message }) => (
        render= {(
            { subscribe, status, message, error, success } = this.state ) => (
        
        <div
        className={`Block Block--Newsletter Newsletter Newsletter--`}
    ><h3 className="Block__Heading">Stay Tuned</h3>
    <p className="Block__Concent">
        Leave us your email and we’ll let you know when the results are published.
    </p>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {/* {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>} */}
        {status === "error" && <div className="Newsletter__Message Newsletter__Error">{error.message}</div>}
        {/* {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>} */}
        {status === "success" && <div className="Newsletter__Message Newsletter__Success">{success.message}</div>}
      </div>
    )}
  />
)
export default CustomForm




