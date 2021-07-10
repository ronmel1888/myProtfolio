import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './social-media.css'




export default class SocialMedia extends Component<any> {

    public render() {
        return (
            <div className="social-media">
                <a href="https://www.facebook.com/ron.melenitzki"><FontAwesomeIcon icon={faFacebook} size="2x" color="white" className="social-link"></FontAwesomeIcon></a> &nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/ronmelnitcki/"><FontAwesomeIcon icon={faLinkedin} size="2x" color="white" className="social-link"></FontAwesomeIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.instagram.com/ronmele/"><FontAwesomeIcon icon={faInstagram} size="2x" color="white" className="social-link"></FontAwesomeIcon></a>&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/ronmel1888"><FontAwesomeIcon icon={faGithub} size="2x" color="white" className="social-link"></FontAwesomeIcon></a>
            </div>
        )
    }
}