import React from "react"

function ContactCard(props) {
    console.log(props)
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>Location: {props.contact.location}</p>
            <p>Role: {props.contact.role}</p>
        </div>
    )
}

export default ContactCard