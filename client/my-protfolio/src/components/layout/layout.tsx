import React, { Component } from 'react'
import "./layout.css"
import Home from '../home/home'
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import MyWork from '../my-work/my-work';
import ContactMe from '../contact-me/contact-me';
import Skills from '../skills/skills'
import AboutMe from '../about-me/about-me';


export default class Layout extends Component{
    public render() {
        return(
        <BrowserRouter>
        <section className="layout">
            <main>
                <Switch>
                            <Route path="/about-me" component={AboutMe} exact/>
                            <Route path="/skills" component={Skills} exact/>
                            <Route path="/contact-me" component={ContactMe} exact/>
                            <Route path="/my-work" component={MyWork} exact />   
                            <Route path="/home" component={Home} exact />
                            <Redirect from="/" to="/home" exact />
                </Switch>
            </main>




        </section>
    </BrowserRouter >


     );
    }
}