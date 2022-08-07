import React from 'react'
import './contact.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
function ContactUs() {
    return (
        <div class="outer-box">
        <form>
          <div class="row">
            <div class="input-stuff">
              <input type="text" id="Name" placeholder="" />
              <label for="name"
                ><i class="fa-solid fa-user"></i> First Name</label
              >
            </div>
            <div class="input-stuff">
              <input type="text" id="Name" placeholder="" />
              <label for="name"><FontAwesomeIcon icon="faUser" /> Last Name</label>
            </div>
          </div>
  
          <div class="input-stuff">
            <input type="email text" id="email" placeholder="" />
            <label for="email"><i class="fa-solid fa-envelope"></i> E-Mail</label>
          </div>
          <div class="input-stuff">
            <textarea type="text" id="message" placeholder=""></textarea>
            <label for="message"
              ><i class="fa-solid fa-message"></i> Message</label
            >
          </div>
          <button class = "submit" type="submit">SUBMIT</button>
        </form>
      </div>
    );
}

export default ContactUs;