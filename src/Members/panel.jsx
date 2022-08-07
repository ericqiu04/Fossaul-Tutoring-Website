import React from 'react';
import '../css files/members.css'
function Panel(props){
    const handleClick = event =>{
        alert("Image Clicked");
    }
    return(
    <div className = "panel">
        <img src = {props.imgURL} alt = "p1" onClick = {handleClick}></img>
        <h3>{props.name}</h3>
    </div>);
}

export default Panel;