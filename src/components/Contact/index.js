/***************/
/*** CONTACT ***/
/***************/
import React,{Component} from 'react';
import './contact.css';
import {GrMail } from 'react-icons/gr';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
    }
    handleChange =(event)=>{
        this.setState({value: event.target.value});
    }
    handleSubmit=(event)=>{
        alert('Thank you, for your message '+ this.state.value);
        event.preventDefault();
    }
    render(){
        return(
            <div className="container-fluid contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 contact-left">
                            <h6>CONTACT via website</h6>
                            <h1>GET IN TOUCH</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={this.state.value} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Email"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="subject">Subject</label>
                                    <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <label for="message">Example textarea</label>
                                    <textarea className="form-control" id="message" name="message" rows="3" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="col-sm-6 contact-right">
                            <h6>CONTACT via mail</h6>
                            <h2>ANOTHER OPTION</h2>
                            <p>
                                <span><GrMail /></span>
                                <a href="mailto:tinuscharl@gmail.com?subject=Mail from Our Site">tinuscharl@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
