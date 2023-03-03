import React, { useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const initialValues = { username: "", password: "" };
    const [loginValues, setloginValues] = useState(initialValues);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setloginValues({ ...loginValues, [name]: value });
    };

    const loginactivity = (e) => {
        checkUser(loginValues);
        e.preventDefault();

    }
    const checkUser = (loginValues) => {
        axios.post("http://localhost:8082/signin", loginValues).then((response) => {
            console.log(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("userRole", JSON.stringify(response.data.role));
            Swal.fire({
                icon: "success",
                title: "LoggedIn Successfull",
                text: "Welcome LoggedIn Successfully"
            })
            navigate("/home");

            // Swal.fire({
            //     icon: "success",
            //     title: "Login",
            //     text: "Loggedin Successfully"
            // )},



        }, (error) => {
            console.log(error.data);
            Swal.fire({
                icon: "error",
                title: "Credential not Matching",
                text: "Please try again",
            }
            );
        });

    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user !== null) {
            navigate("/home");
        }
    })

    return (
        <div className="col-md-12">
            <br />
            <div className="card card-container">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />
                <div className="header-text">
                    Login
                </div>

                <Form onSubmit={loginactivity}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="username"
                            value={loginValues.username}
                            onChange={handleChange}
                        //validations={[required]}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Input
                            type="password"
                            className="form-control"
                            name="password"
                            value={loginValues.password}
                            onChange={handleChange}
                        //validations={[required]}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <br />
                        <div class="form-group">
                            <button className="btn btn-primary btn-block">Sign In</button>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <p>
                            Looking for a new Job?
                            <a href="/RegisterCandidate">Register Here</a>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>
                            Want to hire new candidates?
                            <a href="/RegisterRecruiter">Register Here</a>
                        </p>
                    </div>

                </Form>
            </div>
        </div>
    );
}

export default Login