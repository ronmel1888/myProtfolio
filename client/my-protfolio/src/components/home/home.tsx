import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./home.css"

export default class Home extends Component<any> {
    nextPath(path: any) {
        this.props.history.push(path);
      }
    
    public render() {
        return (
            <div>
                
                <div className="my-image"></div>
                
                <div className="welcome">
                    <div className="welcome-title">Ron Melnitcki</div>
                    <div className="welcome-role-stack">Full Stack</div>
                    <div className="welcome-role-dev">Developer</div>
                </div>

                <div className="nav">
                <Link to={'about-me'} className="navLink">About Me</Link>
                <Link to={'my-work'} className="navLink">My Work</Link>
                <Link to={'skills'} className="navLink">My Skills</Link>
                <Link to={'contact-me'} className="navLink">Contact Me</Link> <br/>
                </div>
                {/* <p>you are well come to enjoy exploring</p> */}
                {/* <Button onClick= {() => this.nextPath('/my-work')}>My Work</Button> */}
            
            </div>
    )
    }
}