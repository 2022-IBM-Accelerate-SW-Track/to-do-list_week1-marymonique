import React, { Component } from 'react';
import "./About.css";
import profilepic3 from "../assets/profilepic3.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            // Image goes here
            src= {profilepic3}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Mary Campbell</div>
          <div className="brief_description">
            Hi! I'm Mary, I'm a student at the University of California, Irvine studying Computer Engineering
            and I love coffee and being active.
          </div>
        </div>
      </div>
    </div>
    )
  }
}