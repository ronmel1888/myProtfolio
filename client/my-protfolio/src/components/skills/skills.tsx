import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Icon, InlineIcon } from '@iconify/react';
import mongodbIcon from '@iconify-icons/simple-icons/mongodb';
import visualStudioCode from '@iconify-icons/cib/visual-studio-code';
import eclipseideIcon from '@iconify-icons/cib/eclipseide';
import googleCloud from '@iconify-icons/cib/google-cloud';
import expressIcon from '@iconify-icons/logos/express';
import { Link } from 'react-router-dom';
// import "./header.css"
// import { Document } from 'react-pdf'
// import PDF from 'C:\development\myProtfolio\client\my-protfolio\src\components\skills\cv.pdf'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMailBulk, faPen, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import '../skills/skills.css'
// import { faJava, faJs, faJsSquare, faPython, faTypo3 } from '@fortawesome/free-brands-svg-icons';




export default class skills extends Component<any> {
    nextPath(path: any) {
        this.props.history.push(path);
      }
    
    public render() {
        return (
            <div>
                    <div className="divBack">
                    <span></span>
                    <Link to={'/'} className="linkBack">BACK</Link> &nbsp;&nbsp;
                </div>
                <div className="programing-language">
                    <ul className = "skills-ul">Program Languages</ul>
                    <li className ="skills-li"><img src="https://img.icons8.com/ios-filled/28/000000/javascript.png"/> JavaScript</li> 
                    <li className ="skills-li"><img src="https://img.icons8.com/material-rounded/30/000000/typescript.png"/> TypeScript </li>
                    <li className ="skills-li"><img src="https://img.icons8.com/ios-filled/30/000000/java-coffee-cup-logo--v1.png"/> Java</li>
                    <li className ="skills-li"><img src="https://img.icons8.com/metro/30/000000/python.png"/> Python</li>
                </div>
                <br/>
                <div className="client-tech">
                    <ul className="skills-ul">Client Tech</ul>
                    <li className ="skills-li"><img src="https://img.icons8.com/material-rounded/30/000000/html-5.png"/> HTML</li>
                    <li className ="skills-li"><img src="https://img.icons8.com/ios-glyphs/30/000000/css3.png"/> CSS</li>
                    <li className ="skills-li"><img src="https://img.icons8.com/windows/30/000000/bootstrap.png"/> BootStrap</li>
                    <li className ="skills-li"><img src="https://img.icons8.com/ios-filled/30/000000/jquery.png"/> jQuery</li>
                    <li className ="skills-li"><img src="https://img.icons8.com/small/30/000000/react.png"/> React</li>
                    <li className ="skills-li"><img src="https://img.icons8.com/ios-filled/30/000000/angularjs.png"/> Angular</li>
                    <li className ="skills-li"><img src="https://img.icons8.com/windows/30/000000/wordpress-simple.png"/> WordPress</li>
                </div>
                <div className="server-tech">
                    <ul className="skills-ul">Server Tech</ul>
                    <li className ="skills-li"><img src="https://img.icons8.com/windows/30/000000/node-js.png"/> Node.Js</li>
                    <li className ="skills-li"><img src="https://img.icons8.com/wired/30/000000/php-logo.png"/> PHP</li>
                    <li className ="skills-li"><img src="https://img.icons8.com/ios/30/000000/mysql-logo.png"/> MySQL</li>
                    <li className="skills-li"><Icon icon={mongodbIcon} width={"30px"} /> MongoDB</li>
                    <li className="skills-li"><Icon icon={googleCloud} width={"28px"} /> GCP</li>
                    <li className ="skills-li-dot">REST</li>
                    <li className ="skills-li-dot">Express</li>
                </div>
                <div className="development-enviroment">
                    <div className="skills-ul-de">Development Environment</div>
                    <ul></ul>
                    <li className ="skills-li"><Icon icon={visualStudioCode} width={"24px"} /> Visual Studio Code</li>
                    <li className ="skills-li"><Icon icon={eclipseideIcon} width={"24px"} /> Eclipse</li>
                </div>
                <div className="sunglass-img">
                    
                </div>


            </div>
    )
    }
}