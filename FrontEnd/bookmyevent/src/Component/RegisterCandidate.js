import React from 'react'
import Form from "react-validation/build/form";
import { useState, useEffect } from "react";
import axios from 'axios';
import Input from "react-validation/build/input";
import { Tab, Tabs } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
// import SweetAlert from 'react-bootstrap-sweetalert';


function RegisterCandidate() {
    const navigate = useNavigate();
    const initialValues = {
        fullname: "", username: "", password: "", email: "", mobile: "", gender: "", location: "", skills: "", hqual: "", major: ""
        , institute: "", yoq: "", marks: "", exp: "", yoexp: "", company: "", foexp: "", description: ""
    };

    const [candValues, setCandValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCandValues({ ...candValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(candValues));
        if (
            formErrors.email != null || formErrors.fullname != null || formErrors.username != null || formErrors.mobile != null ||
            formErrors.password != null || formErrors.gender != null || formErrors.location != null || formErrors.skills != null || formErrors.hqual != null ||
            formErrors.major != null || formErrors.institute != null || formErrors.yoq != null || formErrors.marks != null || formErrors.exp != null ||
            formErrors.yoexp != null || formErrors.company != null || formErrors.foexp != null || formErrors.description != null
        ) {
            console.log("set is false");
            setIsSubmit(false);
        } else {
            setIsSubmit(true);
        }


        //         if (Object.keys(formErrors).length === 0) {
        if (isSubmit) {
            let data = {
                fullname: candValues.fullname,
                username: candValues.username,
                password: candValues.password,
                email: candValues.email,
                mobile: candValues.mobile,
                gender: candValues.gender,
                location: candValues.location,
                skills: candValues.skills,
                hqual: candValues.hqual,
                major: candValues.major,
                institute: candValues.institute,
                yoq: candValues.yoq,
                marks: candValues.marks,
                exp: candValues.exp,
                yoexp: candValues.yoexp,
                company: candValues.company,
                foexp: candValues.foexp,
                description: candValues.description,
                role: "Candidate"
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

        if (!values.username) {
            formErrors.username = "fullName is required!";
        } else if (!regex3.test(values.username)) {
            formErrors.username = "This is not a valid Name format!";
        }
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
        if (!values.gender) {
            formErrors.gender = "Gender required"
        }
        if (!values.location) {
            formErrors.location = "location is required";
        }
        if (!values.skills) {
            formErrors.skills = "Skills is Required";
        }
        if (!values.hqual) {
            formErrors.hqual = "hqual is Required";
        }
        if (!values.major) {
            formErrors.major = "Major is Required";
        }
        if (!values.institute) {
            formErrors.institute = "institute is required";
        }
        if (!values.yoq) {
            formErrors.yoq = "Year of Qualification is required";
        }
        if (!values.marks) {
            formErrors.marks = "marks of Qualification is required";
        }
        if (!values.exp) {
            formErrors.exp = "Experience is required";
        }
        if (!values.yoexp) {
            formErrors.yoexp = "yoexp is required";
        }
        if (!values.company) {
            formErrors.company = "Company is required";
        }
        if (!values.foexp) {
            formErrors.foexp = "Field of Expertize is required";
        }
        if (!values.description) {
            formErrors.description = "Field of description is required";
        }

        return formErrors;
    };
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(candValues);
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
                    Candidate Registration
                </div>

                <Form onSubmit={handleSubmit}>

                    {/* {!this.state.successful && ( */}
                    <div>
                        <Tabs defaultActiveKey="basic" id="candidateRegister" className="candidateReg">
                            <Tab eventKey="basic" title="Basic Details" >
                                <div className="form-group">
                                    <label htmlFor="fullname">Full Name *</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="fullname"
                                        value={candValues.fullname}
                                        onChange={handleChange}
                                    // validations={[required, fullname]}
                                    />
                                    <p className="text-danger fs-6">{formErrors.fullname}</p>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="username">Username *</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={candValues.username}
                                        onChange={handleChange}
                                    //validations={[required, vusername]}
                                    />
                                    <p className="text-danger fs-6">{formErrors.username}</p>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password *</label>
                                    <Input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={candValues.password}
                                        onChange={handleChange}
                                    //validations={[required, vpassword]}
                                    />
                                    <p className="text-danger fs-6">{formErrors.password}</p>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        value={candValues.email}
                                        onChange={handleChange}
                                    //validations={[required, email]}
                                    />
                                    <p className="text-danger fs-6">{formErrors.email}</p>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile No *</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="mobile"
                                        value={candValues.mobile}
                                        onChange={handleChange}
                                    // validations={[required, vmobile]}
                                    />
                                    <p className="text-danger fs-6">{formErrors.mobile}</p>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="gender">Gender *</label>
                                    <input
                                        type="radio"
                                        value="male"
                                        name="gender"
                                        // checked={this.state.gender === "male"}
                                        onChange={handleChange}
                                    />Male
                                    <input
                                        type="radio"
                                        value="female"
                                        name="gender"
                                        // checked={this.state.gender === "female"}
                                        onChange={handleChange}
                                    />Female
                                    <input
                                        type="radio"
                                        value="others"
                                        name="gender"
                                        // checked={this.state.gender === "others"}
                                        onChange={handleChange}
                                    />Others
                                    <p className="text-danger fs-6">{formErrors.gender}</p>
                                </div>

                                <div class="form-group">
                                    <label htmlFor="location">Current Location *</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="location"
                                        value={candValues.location}
                                        onChange={handleChange}
                                    // validations={[required, vmobile]}
                                    />
                                    {/* <select
                                        id="location"
                                        className="form-control"
                                        value={candValues.location}
                                        onChange={handleChange}
                                    //    validations={[required]}
                                    >
                                        <option value="" disabled selected>--Select your current location--</option>
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
                                    <p className="text-danger fs-6">{formErrors.location}</p>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="skills">Mention Your Skills (comma seperated) *</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="skills"
                                        value={candValues.skills}
                                        onChange={handleChange}
                                    />
                                    <p className="text-danger fs-6">{formErrors.skills}</p>
                                </div>

                            </Tab>
                            <Tab eventKey="education" title="Educational Qualification">
                                <div class="form-group">
                                    <label htmlFor="hqual">Highest Qualification *</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="hqual"
                                        value={candValues.hqual}
                                        onChange={handleChange}
                                    // validations={[required, vmobile]}
                                    />
                                    {/* <select
                                        id="hqual"
                                        className="form-control"
                                        value={candValues.hqual}
                                        onChange={handleChange}
                                    //    validations={[required]}
                                    >
                                        <option value="" disabled selected>--Select your qualification--</option>
                                        <option value="10th">10th</option>
                                        <option value="12th">12th</option>
                                        <option value="B.Tech">B.Tech</option>
                                        <option value="B.Sc">B.Sc</option>
                                        <option value="B.Com">B.Com</option>
                                        <option value="BA">BA</option>
                                        <option value="M.Tech">M.Tech</option>
                                        <option value="M.Sc">M.Sc</option>
                                        <option value="M.Com">M.Com</option>
                                        <option value="MBA">MBA</option>
                                        <option value="PHD">PHD</option>
                                    </select> */}
                                </div>
                                <p className="text-danger fs-6">{formErrors.hqual}</p>
                                <div className="form-group">
                                    <label htmlFor="major">Specialization/Major </label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="major"
                                        value={candValues.major}
                                        onChange={handleChange}
                                    //    validations={[required]}
                                    />
                                </div>
                                <p className="text-danger fs-6">{formErrors.major}</p>
                                <div className="form-group">
                                    <label htmlFor="institute">University/School *</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="institute"
                                        value={candValues.institute}
                                        onChange={handleChange}
                                    //  validations={[required]}
                                    />
                                </div>
                                <p className="text-danger fs-6">{formErrors.institute}</p>
                                <div class="form-group">
                                    <label htmlFor="yoq">Year Of Qualification *</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="yoq"
                                        value={candValues.yoq}
                                        onChange={handleChange}
                                    // validations={[required, vmobile]}
                                    />
                                    {/* <select
                                        id="yoq"
                                        className="form-control"
                                        value={candValues.yoq}
                                        onChange={handleChange}
                                    //  validations={[required]}
                                    >
                                        <option value="" disabled selected>--Select your year of passing--</option>
                                        <option value="2010">2010</option>
                                        <option value="2011">2011</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                    </select> */}
                                </div>
                                <p className="text-danger fs-6">{formErrors.yoq}</p>
                                <div className="form-group">
                                    <label htmlFor="marks">Percentage Of Marks *</label>
                                    <Input
                                        type="number"
                                        className="form-control"
                                        name="marks"
                                        value={candValues.marks}
                                        onChange={handleChange}
                                    //  validations={[required, vmarks]}
                                    />
                                    <p className="text-danger fs-6">{formErrors.marks}</p>
                                </div>

                            </Tab>
                            <Tab eventKey="others" title="Other Details">
                                <div className="form-group">
                                    <label htmlFor="exp">Do you have work experience? *</label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="yes"
                                            name="exp"
                                            checked={candValues.exp === "yes"}
                                            onChange={handleChange}
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="no"
                                            name="exp"
                                            checked={candValues === "no"}
                                            onChange={handleChange}
                                        />
                                        No
                                    </label>
                                    <p className="text-danger fs-6">{formErrors.exp}</p>
                                </div>

                                <div class="form-group">
                                    <label htmlFor="yoexp">Year Of Experience *</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="yoexp"
                                        value={candValues.yoexp}
                                        onChange={handleChange}
                                    // validations={[required, vmobile]}
                                    />
                                    {/* <select
                                        id="yoexp"
                                        className="form-control"
                                        value={candValues.yoexp}
                                        onChange={handleChange}
                                    // validations={[required]}
                                    >
                                        <option value="" disabled selected>--Select your years of experience--</option>
                                        <option value="Fresher">Fresher</option>
                                        <option value="0">0 Years</option>
                                        <option value="1">1 Years</option>
                                        <option value="2">2 Years</option>
                                        <option value="3">3 Years</option>
                                        <option value="4">4 Years</option>
                                        <option value="5">5 Years</option>
                                        <option value="6">6 Years</option>
                                        <option value="7">7 Years</option>
                                        <option value="8">8 Years</option>
                                    </select> */}
                                    <p className="text-danger fs-6">{formErrors.yoexp}</p>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="company"
                                        value={candValues.company}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p className="text-danger fs-6">{formErrors.company}</p>
                                <div className="form-group">
                                    <label htmlFor="foexp">Field Of Expertize</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="foexp"
                                        value={candValues.foexp}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p className="text-danger fs-6">{formErrors.foexp}</p>
                                <div className="form-group">
                                    <label htmlFor="description">Other Description</label>
                                    <Input
                                        type="textarea"
                                        className="form-control"
                                        name="description"
                                        value={candValues.description}
                                        onChange={handleChange}
                                    />
                                    <p className="text-danger fs-6">{formErrors.description}</p>
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

export default RegisterCandidate