import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './about-me.css'
import SocialMedia from '../social-media/social-media';


export default class AboutMe extends Component<any> {
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
                <div className="me-img"></div>
                <div className="info">
                    A highly motivated Full-Stack developer, fast learner, a people person, team player, with good attitude and strong work ethics.
                    Looking for a challenging job in the field of Full-Stack development, Web development and Front-End development.
                    <br /><br />
                    <div className="my-education">
                        My Education:
                    <ul>
                            <li>Open university - Computer Science (2020- present)</li>
                            <li>John Bryce - Full-Stack developer (2020- 2021)</li>
                            <li>Ariel University – Computer Science and Math undergraduate student (2019 – 2020).</li>
                        </ul>
                    </div>
                    <div className="my-hobies">
                        When I'm not studying or working, you probably could find me at those places:
                        <ul>
                            <li>SkatePark</li>
                            <li>Enjoying life with friends</li>
                            <li>Watching <span className="lfc">LFC</span></li>
                        </ul>
                    </div>
                </div>
                <div className="social-media">
                    <SocialMedia></SocialMedia>
                </div>






            </div>
        )
    }
}