import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

function EditCandidateProfile(props) {
    const initialValues = {
        fullname: "",
        username: "",
        password: "",
        email: "",
        mobile: "",
        gender: "",
        location: "",
        skills: "",
        hqual: "",
        major: "",
        institute: "",
        yoq: "",
        marks: "",
        exp: "",
        yoexp: "",
        company: "",
        foexp: "",
        description: "",
    };

    const [candValues, setCandValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState("");
    const currentUser = JSON.parse(localStorage.getItem('user'));
    // const [currentCandidate, setcurrentCandidate] = useState(initialValues);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCandValues({ ...candValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        console.log("handlesubmit" + candValues.fullname);
        e.preventDefault();
        setFormErrors(validate(candValues));
        if (
            formErrors.fullname != null ||
            formErrors.mobile != null ||
            formErrors.gender != null ||
            formErrors.location != null ||
            formErrors.skills != null ||
            formErrors.hqual != null ||
            formErrors.major != null ||
            formErrors.institute != null ||
            formErrors.yoq != null ||
            formErrors.marks != null ||
            formErrors.exp != null ||
            formErrors.yoexp != null ||
            formErrors.company != null ||
            formErrors.foexp != null ||
            formErrors.description != null
        ) {
            console.log("set is false");
            setIsSubmit(false);
        } else {
            setIsSubmit(true);
        }

        //         if (Object.keys(formErrors).length === 0) {
        if (isSubmit) {
            let data = {
                // userid: candValues.userid,
                fullname: candValues.fullname,
                // password: candValues.password,
                // email: candValues.email,
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
            };
            const user = JSON.parse(localStorage.getItem("user"));
            const url = "http://localhost:8082/profileCandedit/" + user.userId;
            const list = await axios.put(url, data);
            Swal.fire({
                icon: "success",
                title: "Profile Updated",
                text: "Congratulations Profile Updated",
            });
            console.log(list.data);
        } else if (isSubmit === false) {
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
            formErrors.fullname = "Fullname name is required!";
        } else if (!regex3.test(values.fullname)) {
            formErrors.fullname = "This is not a valid Name format!";
        }

        if (!values.mobile) {
            formErrors.mobile = "Contact number is required!";
        } else if (!regex2.test(values.mobile)) {
            formErrors.mobile = "This is not a valid phoneNo format!";
        }
        if (!values.gender) {
            formErrors.gender = "Gender required";
        }
        if (!values.location) {
            formErrors.location = "location is required";
        }
        if (!values.skills) {
            formErrors.skills = "Skills is Required";
        }
        if (!values.hqual) {
            formErrors.hqual = "Qualification is Required";
        }
        if (!values.major) {
            formErrors.major = "Major qualification is Required";
        }
        if (!values.institute) {
            formErrors.institute = "Institute is required";
        }
        if (!values.yoq) {
            formErrors.yoq = "Year of Qualification is required";
        }
        if (!values.marks) {
            formErrors.marks = "Marks of Qualification is required";
        }
        if (!values.exp) {
            formErrors.exp = "Experience is required";
        }
        if (!values.yoexp) {
            formErrors.yoexp = "Experience is required";
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

    function getCandidate(id) {
        const BASE_URL = `http://localhost:8082/candidate/${id}`;
        axios
            .get(BASE_URL)
            .then((response) => {
                setCandValues(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        getCandidate(user.userId);
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, []);

    return (
        <div className="edit-form">
            <div className="header-main">
                <p>UPDATE PROFILE</p>
            </div>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <p className="form-group">
                        <strong>User Name:</strong>
                        {currentUser.username}
                    </p>
                    <p className="form-group">
                        <strong>UserId:</strong>
                        {currentUser.candId}
                    </p>
                    <p className="form-group">
                        <strong>Email:</strong>
                        {currentUser.email}
                    </p>
                    <p className="form-group">
                        <strong>Authorities:</strong>
                        {currentUser.role}
                        {/* {currentUser.roles &&
              currentUser.roles.map((role, index) => (
                <span key={index}>{role}</span>
              ))} */}
                    </p>
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="fullname"
                            value={candValues.fullname}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.fullname}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="mobile"
                            value={candValues.mobile}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.mobile}</p>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <input
                            type="radio"
                            value="male"
                            name="gender"
                            onChange={handleChange}
                        />
                        Male
                        <input
                            type="radio"
                            value="female"
                            name="gender"
                            onChange={handleChange}
                        />
                        Female
                        <input
                            type="radio"
                            value="others"
                            name="gender"
                            onChange={handleChange}
                        />
                        Others
                        <p className="text-danger fs-6">{formErrors.gender}</p>
                    </div> */}

                    <div class="form-group">
                        <label htmlFor="location">Current Location *</label>
                        <input
                            type="text"
                            name="location"
                            className="form-control"
                            // placeholder={recruiter.location}
                            value={candValues.location}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.location}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="skills">Skills Required</label>
                        <input
                            type="text"
                            className="form-control"
                            name="skills"
                            value={candValues.skills}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.skills}</p>
                    </div>
                    <div class="form-group">
                        <label htmlFor="hqual">Highest Qualification *</label>
                        <input
                            name="hqual"
                            className="form-control"
                            value={candValues.hqual}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.hqual}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="major">Specialization/Major </label>
                        <input
                            type="text"
                            className="form-control"
                            name="major"
                            value={candValues.major}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.major}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="institute">University/School *</label>
                        <input
                            type="text"
                            className="form-control"
                            name="institute"
                            value={candValues.institute}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.institute}</p>
                    </div>
                    <div class="form-group">
                        <label htmlFor="yoq">Year Of Qualification *</label>
                        <input
                            name="yoq"
                            className="form-control"
                            value={candValues.yoq}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.yoq}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="marks">Percentage Of Marks *</label>
                        <input
                            type="number"
                            className="form-control"
                            name="marks"
                            value={candValues.marks}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.marks}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exp">Do you have work experience? *</label>
                        <input
                            type="text"
                            className="form-control"
                            name="exp"
                            value={candValues.exp}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.exp}</p>
                    </div>
                    <div class="form-group">
                        <label htmlFor="yoexp">Year Of Experience *</label>
                        <input
                            name="yoexp"
                            className="form-control"
                            value={candValues.yoexp}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.yoexp}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Company Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="company"
                            value={candValues.company}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.company}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="foexp">Field Of Expertize</label>
                        <input
                            type="text"
                            className="form-control"
                            name="foexp"
                            value={candValues.foexp}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.foexp}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Other Description</label>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            value={candValues.description}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.description}</p>
                    </div>
                    <br />
                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-success"
                        //   onClick={this.updateCandidate}
                        >
                            Update and Submit
                        </button>
                        <Button
                            variant="danger"
                            //   href={`/profile/${currentUser.id}`}
                            name="return-profile"
                        >
                            Return To Profile
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditCandidateProfile;
