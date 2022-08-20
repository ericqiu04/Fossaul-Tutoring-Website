import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './contact.scss'
import {faUser} from "@fortawesome/free-solid-svg-icons";
function ContactUs() {
    return (
        <div class="outer-box">
        <form>
          <div class="row">
            <div class="input-stuff">
              <input type="text" id="Name" placeholder="First Name" />
              
            </div>
            <div class="input-stuff">
              <input type="text" id="Name" placeholder="Last Name" />
              
            </div>
          </div>
  
          <div class="input-stuff">
            <input type="email text" id="email" placeholder="E-Mail" />
           
          </div>
          <div class="input-stuff">
            <textarea type="text" id="message" placeholder="Message"></textarea>
            
          </div>
          <button class = "submit" type="submit">SUBMIT</button>
        </form>
      </div>
    );
}

export default ContactUs;