import React, { ChangeEvent, Component } from 'react';
import { Button, Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faPen, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import './contact-me.css';
import { ContactServerResponse } from '../../models/contact-me';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SocialMedia from '../social-media/social-media';


interface ContactState {
    name: string,
    email: string,
    phoneNumber: string,
    messege: string,
    alertShow: boolean,
    nameBorder: string,
    emailBorder: string,
    phoneBorder: string,
    messegeBorder: string
    
}
export default class ContactMe extends Component<any, ContactState>{
    constructor(props: any) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phoneNumber: "",
            messege: "",
            alertShow: false,
            nameBorder: "",
            emailBorder: "",
            phoneBorder: "",
            messegeBorder: ""
            
        }
    }
    nextPath(path: any) {
        this.props.history.push(path);
    }

    private setName = (args: ChangeEvent<HTMLInputElement>) => {
        const name = args.target.value;
        this.setState({ name });
    }
    private setEmail = (args: ChangeEvent<HTMLInputElement>) => {
        const email = args.target.value;
        this.setState({ email });
    }
    private setPhoneNumber = (args: ChangeEvent<HTMLInputElement>) => {
        const phoneNumber = args.target.value;
        this.setState({ phoneNumber });
    }
    private setMessege = (args: ChangeEvent<HTMLInputElement>) => {
        const messege = args.target.value;
        this.setState({ messege });
        console.log(this.state);


    }
    private showAlert = () => {
        const alertShow = false;
        this.setState({ alertShow: !alertShow })


    }

    private messegeVal = (a: boolean) => {
        this.setState({
            nameBorder: "",
            emailBorder: "",
            phoneBorder: "",
            messegeBorder:""
        })
        if (this.state.name == "") {
            this.setState({nameBorder:"2px solid red"})
            a = false;
        }
        if (this.state.email == "") {
            this.setState({emailBorder:"2px solid red"})
             a=false;
        }
        if (this.state.phoneNumber == "") {
            this.setState({phoneBorder:"2px solid red"})
            a=false;
        }
        if (this.state.messege == "") {
            this.setState({messegeBorder:"2px solid red"})
             a=false;
        }
        return a;
}

    private sendMessege = async () => {
        let flag = true;
        flag= this.messegeVal(flag);
        console.log(flag);
        if(flag == true){
        console.log("start");
        try {
            let contactServerResponse = new ContactServerResponse(
                this.state.name,
                this.state.email,
                this.state.phoneNumber,
                this.state.messege);
            console.log(contactServerResponse);
            const response = await axios.post('http://localhost:3001/mail/send', contactServerResponse); // use with server
            const serverResponse = response.data;
            console.log(serverResponse);


        } catch (err) {
            alert(err.message); // CHANGE IT TO MODAL 
            console.log(err);
        }
        console.log("finished!");
        this.showAlert();
    }

    }



    render() {
        return (

            <div>
                <div className="divBack">
                    <span></span>
                    <Link to={'/'} className="linkBack">BACK</Link> &nbsp;&nbsp;
                </div>
                <Alert
                    className="modal-alert"
                    show={this.state.alertShow}
                    onClose={() => this.nextPath('/')} dismissible
                    // show={true}
                    variant="primary"
                >
                    <Alert.Heading className="alert-header">Thanks For Your Intrests</Alert.Heading>
                    <br /><br />
                    <p className="alert-text">Your messege has been sent
                    talk to you soon
                    </p>
                    <div className="thanks-pic"></div>
                    <SocialMedia></SocialMedia>
                </Alert>
                <div className="contact-image" hidden={this.state.alertShow}></div>

                <div className="formDiv" hidden={this.state.alertShow}>
                    <Form>
                        <Form.Group>
                            &nbsp;<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>&nbsp;
                        <Form.Label>Name</Form.Label>
                            <Form.Control style={{
                                border: this.state.nameBorder
                            }} id="name" className="formInput" type="text" placeholder="Name" onChange={this.setName} name="name" />
                        </Form.Group>
                        <Form.Group >
                            &nbsp;<FontAwesomeIcon icon={faMailBulk} ></FontAwesomeIcon>&nbsp;
                        <Form.Label>Email</Form.Label>
                            <Form.Control  style={{
                                border: this.state.emailBorder
                            }} 
                                id="email" className="formInput" type="text" placeholder="Email" onChange={this.setEmail} name="email" />
                        </Form.Group>
                        <Form.Group >
                            &nbsp;<FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>&nbsp;
                        <Form.Label>Phone Number</Form.Label>
                            <Form.Control style={{
                                border: this.state.phoneBorder
                            }} 
                                id="phone" className="formInput" type="text" placeholder="Phone Number" onChange={this.setPhoneNumber} name="phoneNumber" />
                        </Form.Group>
                        <Form.Group >
                            &nbsp;<FontAwesomeIcon icon={faPen}></FontAwesomeIcon>&nbsp;
                        <Form.Label>Write Here</Form.Label>
                            <Form.Control style={{
                                border: this.state.messegeBorder
                            }} 
                                className="formInput" as="textarea" rows={3} onChange={this.setMessege} />
                        </Form.Group>

                        <Button onClick={this.sendMessege.bind(this)}>Send
                        </Button>


                    </Form>
                </div>


            </div>

        )
    }
}