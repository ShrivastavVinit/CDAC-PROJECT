import React from 'react'
import Form from "react-validation/build/form";
import { useState, useEffect } from "react";
import axios from 'axios';
import Input from "react-validation/build/input";
import { Tab, Tabs } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
// import SweetAlert from 'react-bootstrap-sweetalert';


function RegisterCustomer() {
    const navigate = useNavigate();
    const initialValues = {
        fullname: "", password: "", email: "", mobile: "",  Address: ""
    };

    const [custValues, setCustValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustValues({ ...custValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(custValues));
        if (
            formErrors.email != null || formErrors.fullname != null ||  formErrors.mobile != null ||
            formErrors.password != null ||  formErrors.Address != null 
        ) {
            console.log("set is false");
            setIsSubmit(false);
        } else {
            setIsSubmit(true);
        }


        //         if (Object.keys(formErrors).length === 0) {
        if (isSubmit) {
            let data = {
                fullname: custValues.fullname,
                password: custValues.password,
                email: custValues.email,
                mobile: custValues.mobile, 
                address: custValues.Address,
                
                // role: "customer"
            }
            const url = "http://localhost:8082/signup/candidate ";
            //     const list = await axios.post(url, data);
            //     Swal.fire({
            //         icon: "success",
            //         title: "login",
            //         text: "Candidate Registered Successfully"
            //     });
            //     navigate('/login');
            //     console.log(list.data);
            // }
            axios.post(url, data).then((response) => {
                Swal.fire({
                    icon: "success",
                    title: "login",
                    text: "Registered Successfully"
                });
                navigate('/login');
                console.log(response.data);
            }).catch((error) => {
                if (error.response) {
                    if (error.response.data === "Error: Username is already taken!") {
                        Swal.fire({
                            icon: "error",
                            title: "Try again",
                            text: "Username already Exists...please try another",
                        });
                    }
                    else if (error.response.data === "Error: Email is already in use!") {
                        Swal.fire({
                            icon: "error",
                            title: "Try again",
                            text: "Email already Exist",
                        });
                    }
                }

            })
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Try again",
                text: "Enter valid details",
            });
        }

    };
    const validate = (values) => {
        const formErrors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regex1 = /[3-9]/;
        //const regex3 = /^[a-zA-Z\\s]*$/i;
        const regex3 = /^[a-zA-z]+([\s][a-zA-Z]+)*$/i;
        const regex2 = /^((\+)?(\d{2}[-]))?(\d{10}){1}?$/i;
        const regex4 = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;


        if (!values.fullname) {
            formErrors.fullname = "First name is required!";
        } else if (!regex3.test(values.fullname)) {
            formErrors.fullname = "This is not a valid Name format!";
        }

        // if (!values.username) {
        //     formErrors.username = "fullName is required!";
        // } else if (!regex3.test(values.username)) {
        //     formErrors.username = "This is not a valid Name format!";
        // }
        if (!values.password) {
            formErrors.password = "password is required!";
        } else if (!regex4.test(values.password)) {
            formErrors.username = "This is not a valid Password format!";
        }

        if (!values.email) {
            formErrors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            formErrors.email = "This is not a valid email format!";
        }

        if (!values.mobile) {
            formErrors.mobile = "Contact number is required!";
        } else if (!regex2.test(values.mobile)) {
            formErrors.mobile = "This is not a valid phoneNo format!";
        }
       
        if (!values.Address) {
            formErrors.Address = "Address is required";
        }
       
   

        return formErrors;
    };
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(custValues);
        }
    }, []);

    return (
        <div className="card">
            <div>
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />
                <div className="header-text">
                    Vendor Registration
                </div>

                <Form onSubmit={handleSubmit}>

                    {/* {!this.state.successful && ( */}
                    <div>
                        <Tabs defaultActiveKey="basic" id="customerRegister" className="customerReg">
                            <Tab eventKey="basic" title="Basic Details" >
                                <div className="form-group">
                                    <label htmlFor="fullname">Full Name *</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="fullname"
                                        value={custValues.fullname}
                                        onChange={handleChange}
                                    // validations={[required, fullname]}
                                    />
                                    <p className="text-danger fs-6">{formErrors.fullname}</p>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        value={custValues.email}
                                        onChange={handleChange}
                                    //validations={[required, email]}
                                    />
                                    <p className="text-danger fs-6">{formErrors.email}</p>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password *</label>
                                    <Input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={custValues.password}
                                        onChange={handleChange}
                                    //validations={[required, vpassword]}
                                    />
                                    <p className="text-danger fs-6">{formErrors.password}</p>
                                </div>

                               

                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile No *</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="mobile"
                                        value={custValues.mobile}
                                        onChange={handleChange}
                                    // validations={[required, vmobile]}
                                    />
                                    <p className="text-danger fs-6">{formErrors.mobile}</p>
                                </div>

                                

                                <div class="form-group">
                                    <label htmlFor="location">Address *</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="Address"
                                        value={custValues.Address}
                                        onChange={handleChange}
                                    // validations={[required, vmobile]}
                                    />
                                    {/* <select
                                        id="Address"
                                        className="form-control"
                                        value={candValues.Address}
                                        onChange={handleChange}
                                    //    validations={[required]}
                                    >
                                        <option value="" disabled selected>--Select your current Address--</option>
                                        <option value="Africa">Africa</option>
                                        <option value="Australia">Algeria</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Chile">Chile</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="France">France</option>
                                        <option value="Germany">Germany</option>
                                        <option value="India">India</option>
                                        <option value="Poland">Poland</option>
                                        <option value="UAE">UAE</option>
                                        <option value="USA">USA</option>
                                    </select> */}
                                    <p className="text-danger fs-6">{formErrors.Address}</p>
                                </div>

                                

                                <br />
                                <div class="form-group">
                                    <button className="btn btn-primary btn-block">Sign Up</button>
                                </div>
                            </Tab>
                        </Tabs>
                        <div>
                        </div>
                    </div>
                    {/* )} */}

                    {/* {this.state.message && (
                        <div className="form-group">
                            <div
                                className={
                                    this.state.successful
                                        ? "alert alert-success"
                                        : "alert alert-danger"
                                }
                                role="alert"
                            >
                                {this.state.message}
                            </div>
                        </div>
                    )} */}
                    {/* <CheckButton
                        style={{ display: "none" }}
                        ref={c => {
                            this.checkBtn = c;
                        }}
                    /> */}
                </Form>
            </div>
        </div >
    );
}

export default RegisterCustomer