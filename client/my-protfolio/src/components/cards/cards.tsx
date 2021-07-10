import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

import "./cards.css"

interface CardsProps {
    url: string,
    title: string,
    text: string,
    link: string
}



export default class Cards extends Component<CardsProps>{
    constructor(props: CardsProps) {
        super(props);

    }

    private moveToUrl = (url: string) => {
        window.location.href = url;

    }



    public render() {
        const { url, title, text, link } = this.props;
        return (
            <div>
                <div className="work-cards">
                    <a href= {link}><img src={url} className="work-cards-img"/></a> 
                    {/* <img src={url} className="work-cards-img" onClick={()=>this.moveToUrl(link) } /> */}
                    {/* <Card.Img variant="top" src={url} /> */}
                    <header className="work-cards-header">{title}</header>
                    <div>
                    <div className= "work-cards-body">{text}</div>
                    </div>
                    {/* <Card.Body> */}
                        {/* <Card.Title>{title}</Card.Title> */}
                        {/* <Card.Text>
                            {text}
                        </Card.Text> */}
                        {/* <Button variant="primary" onClick={() => this.moveToUrl(link)}>To Website</Button> */}
                    {/* </Card.Body> */}
                </div>
                <br/>
            </div>
        )
    }
}