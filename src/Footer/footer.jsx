import React from 'react';

function Footer() {

    const year = new Date().getFullYear();
    return (<div className = "footer">
        <h4>Fossaul Tutoring &copy; {year}</h4>
    </div>);
}

export default Footer;