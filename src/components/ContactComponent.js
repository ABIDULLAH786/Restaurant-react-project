import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input, Col, Button} from "reactstrap";

class Contact extends React.Component {
     
    constructor(props){
        super(props)
        this.state = {
            fName: "",
            lName: "",
            phone: "",
            agree: false,
            email: "",
            message: "",
            contactType:""
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({ [name]: checked }) 
            :
            this.setState({ [name]: value }) 
    }
    
    handleSubmit(e){
        alert(JSON.stringify("Done"))
        alert(JSON.stringify(this.state))
        e.preventDefault();
    }
    render(){
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                <BreadcrumbItem>
                    <Link to={"/"}>Home</Link>{" "}
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to={"/menu"}>Menu</Link>{" "}
                </BreadcrumbItem>
                <BreadcrumbItem active>Contact </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row row-content">
            {displayInformation()}
            </div>
            
            {/* Feedback Form */}
            <h3 className="mt-5">Send us Your Feedback</h3>
            <Form className="mt-3" onSubmit={this.handleSubmit}>
                <FormGroup row >
                    <Label htmlFor="fName" md={2} sm={3}>First Name</Label>
                    <Col className="col-10 col-md-5">
                        <Input  type="text" name="fName" placeholder="First Name" id="fName"
                            value={this.state.fName}
                            onChange={this.handleChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="lName" md={2} sm={3}>Last Name</Label>
                    <Col className="col-10 col-md-5">
                        <Input  type="text" name="lName" placeholder="Last Name" id="lName"
                            value={this.state.lName}
                            onChange={this.handleChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Label htmlFor="phone" md={2} sm={3}>Phone</Label>
                    <Col className="col-10 col-md-5">
                        <Input  type="text" name="phone" placeholder="Phome" id="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Label htmlFor="email" md={2} sm={3}>Email</Label>
                    <Col className="col-10 col-md-5">
                        <Input  type="email" name="email" placeholder="Email" id="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Col className="col-7 col-md-3 offset-md-2">
                        <FormGroup check>
                            <Label check>
                                <Input  type="checkbox" name="agree" 
                                    checked={this.state.agree}
                                    onChange={this.handleChange}

                                />
                                <strong>May we contact you?</strong>
                            </Label>
                        </FormGroup>    
                    </Col>
                    <Col className="col-5  col-md-2">
                    <Label check>
                                <Input  type="select" name="contactType" 
                                    onChange={this.handleChange}
                                >
                                    <option value={null}>--Contact Type--</option>
                                    <option value={"phone"}>Phone</option>
                                    <option value={"email"}>Email</option>
                                </Input>
                            </Label>
                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Label htmlFor="message" md={2} sm={3}>Feedback</Label>
                    <Col className="col-10 col-md-5">
                        <Input  type="textarea" name="message" placeholder="Your Feedback..." id="message"
                            rows="5"
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Col className="col-10 col-md-3 offset-md-3">
                        <Button type="submit" color="primary" >
                            Submit
                        </Button>
                    </Col>
                </FormGroup>

            </Form>
        </div>
    );
    }
}
function displayInformation(){
    return(
        <>
             <div className="col-12">
            <h3>Location Information</h3>
            </div>
            <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
                121, Clear Water Bay Road
                <br />
                Clear Water Bay, Kowloon
                <br />
                HONG KONG
                <br />
                <i className="fa fa-phone"></i>: +852 1234 5678
                <br />
                <i className="fa fa-fax"></i>: +852 8765 4321
                <br />
                <i className="fa fa-envelope"></i>:{" "}
                <a href="mailto:abidullah.se@gmail.com">abidullah.se@gmail.com</a>
            </address>
            </div>
            <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
            </div>
            <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
                <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
                >
                <i className="fa fa-phone"></i> Call
                </a>
                <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
                </a>
                <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
                >
                <i className="fa fa-envelope-o"></i> Email
                </a>
            </div>
            </div>
        </>
    )
}
export default Contact;
