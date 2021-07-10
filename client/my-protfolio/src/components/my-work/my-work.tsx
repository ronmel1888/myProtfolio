import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button'
import Cards from '../cards/cards'
import { Link } from 'react-router-dom';
import "./my-work.css"




export default class MyWork extends Component<any> {
    nextPath(path: any) {
        this.props.history.push(path);
      }
    
    public render() {
        return (
            <div>
                <div className="parallax"><br /></div>
                <div className="div-back">
                    <span></span>
                    <Link to={'/'} className="linkBack">BACK</Link> &nbsp;&nbsp;
                </div>
                <div className="work-div">
                <Cards
                    url="https://static.wixstatic.com/media/df4dd4_4e104716ebea400d8e14d82391225921~mv2.jpeg/v1/fill/w_1000,h_463,al_c,q_85,usm_0.66_1.00_0.01/7ce5d1dd-231e-4372-bd70-c8e9b7e5aad3.webp"
                    title="Sticky Notes"
                    text="Project that let you create a sticky note so you wont forget"
                    link="https://gho82.csb.app/"
                >
                    </Cards>
                    <Cards
                    url="https://static.wixstatic.com/media/df4dd4_c9e09620aee448bfabb9d037cc842afa~mv2.jpeg/v1/fill/w_1000,h_483,al_c,q_85,usm_0.66_1.00_0.01/2b5e275e-8002-44d5-83ca-80566b31db84.webp"
                    title="CryptoCoins"
                    text="while CryptoCoins become more valuble all over the globe, we have to know how much they cost"
                    link = "https://xy1gy.csb.app/"
                >
                    </Cards>
                </div>
               

            </div>
    )
    }
}