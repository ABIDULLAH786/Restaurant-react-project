import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input, Col, Button, FormFeedback} from "reactstrap";

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
            contactType:"",
            touched:{
                fName: false,
                lName: false,
                phone: false,
                email: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({ [name]: checked }) 
            :
            this.setState({ [name]: value }) 
    }
    handleBlur = (field) => (e)=>{
        this.setState({
            touched: { ...this.state.touched, [field]:true}
        })
    } 
    validate(fName,lName, phone,email){
        const errors = {
            fName: "",
            lName: "",
            phone: "",
            email: ""
        }
        if(this.state.touched.fName && (fName.length < 3 || fName.length >10))
            errors.fName = "First Name Should be between 3-10";
        if(this.state.touched.lName && (lName.length < 3 || lName.length >10))
            errors.lName = "Last Name Should be between 3-10";

        const reg = /^\d+$/;
        if(this.state.phone && !reg.test(phone))
            errors.phone = "Phone number should contain only number";
        
        const emailFormate = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if(this.state.email && !emailFormate.test(email))
            errors.email = "Invalid email"

            return errors;
    }
    handleSubmit(e){
        alert(JSON.stringify("Done"))
        alert(JSON.stringify(this.state))
        e.preventDefault();
    }
    render(){
        const errors = this.validate(this.state.fName, this.state.lName, this.state.phone, this.state.email)
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
                        <Input type="text" name="fName" placeholder="First Name" id="fName"
                            value={this.state.fName}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur("fName")}
                            valid={this.state.touched.fName && this.state.fName !=="" && errors.fName === ''}
                            invalid={this.state.lName !== "" && errors.fName !== ''}
                        />
                        <FormFeedback>{errors.fName}</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="lName" md={2} sm={3}>Last Name</Label>
                    <Col className="col-10 col-md-5">
                        <Input  type="text" name="lName" placeholder="Last Name" id="lName"
                            value={this.state.lName}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur("lName")}
                            valid={this.state.touched.lName && this.state.lName !== "" && errors.lName === ''}
                            invalid={this.state.lName !== "" && errors.lName !== ''}
                        />
                        <FormFeedback>{errors.lName}</FormFeedback>

                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Label htmlFor="phone" md={2} sm={3}>Phone</Label>
                    <Col className="col-10 col-md-5">
                        <Input  type="text" name="phone" placeholder="Phome" id="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur("phone")}
                            valid={this.state.touched.phone && this.state.phone !=="" && errors.phone === ''}
                            invalid={errors.phone !== ''}
                        />
                        <FormFeedback>{errors.phone}</FormFeedback>

                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Label htmlFor="email" md={2} sm={3}>Email</Label>
                    <Col className="col-10 col-md-5">
                        <Input  type="email" name="email" placeholder="Email" id="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur("email")}
                            valid={this.state.touched.email && this.state.email !=="" && errors.email === ''}
                            invalid={errors.email !== ''}
                        />
                        <FormFeedback>{errors.email}</FormFeedback>

                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Col className="col-12 col-md-4 offset-md-2">
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
                    <Col className="col-12  col-md-3">
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
