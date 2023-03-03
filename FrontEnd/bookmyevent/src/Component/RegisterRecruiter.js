import React from "react";
import Form from "react-validation/build/form";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "react-validation/build/input";
import { Tab, Tabs } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const RegisterRecruiter = () => {
  const navigate = useNavigate();
  const initialValues = {
    fullname: "",
    username: "",
    password: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
    skills: "",
    compName: "",
    compDesignation: "",
    yoexp: "",
    offLocation: "",
    compIndustry: "",
    description: "",
  };

  const [candValues, setCandValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandValues({ ...candValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(candValues));
    if (
      formErrors.email != null ||
      formErrors.fullname != null ||
      formErrors.username != null ||
      formErrors.mobile != null ||
      formErrors.password != null ||
      formErrors.gender != null ||
      formErrors.location != null ||
      formErrors.skills != null ||
      formErrors.compName != null ||
      formErrors.compDesignation != null ||
      formErrors.offLocation != null ||
      formErrors.compIndustry != null ||
      formErrors.yoexp != null ||
      formErrors.description != null
    ) {
      console.log("set is false");
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }

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
        compName: candValues.compName,
        compDesignation: candValues.compDesignation,
        offLocation: candValues.offLocation,
        compIndustry: candValues.compIndustry,
        yoexp: candValues.yoexp,
        description: candValues.description,
        role: "Recruiter",
      };
      const url = "http://localhost:8082/signup/recruiter";
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

    } else {
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
      formErrors.fullname = "Fullname is required!";
    } else if (!regex3.test(values.fullname)) {
      formErrors.fullname = "This is not a valid Name format!";
    }

    if (!values.username) {
      formErrors.username = "Username is required!";
    } else if (!regex3.test(values.username)) {
      formErrors.username = "This is not a valid Username format!";
    }
    if (!values.password) {
      formErrors.password = "Password is required!";
    } else if (!regex4.test(values.password)) {
      formErrors.password = "This is not a valid Password format!";
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
      formErrors.gender = "Gender required";
    }
    if (!values.location) {
      formErrors.location = "location is required";
    }
    if (!values.skills) {
      formErrors.skills = "Skills is Required";
    }
    if (!values.compName) {
      formErrors.compName = "Company Name is Required";
    }
    if (!values.compDesignation) {
      formErrors.compDesignation = "Current Designation is Required";
    }
    if (!values.offLocation) {
      formErrors.offLocation = "Office location is required";
    }
    if (!values.compIndustry) {
      formErrors.compIndustry = "Type of industry is required";
    }
    if (!values.yoexp) {
      formErrors.yoexp = "Experience is required";
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
        <div className="header-text">Recruiter Registration</div>
        <Form onSubmit={handleSubmit}>
          <div>
            <Tabs
              defaultActiveKey="basic"
              id="recruiterRegister"
              className="recruiterReg"
            >
              <Tab eventKey="basic" title="Basic Details">
                <div class="form-group">
                  <label htmlFor="fullname">Full Name *</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="fullname"
                    value={candValues.fullname}
                    onChange={handleChange}
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
                  />
                  <p className="text-danger fs-6">{formErrors.password}</p>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Office Email *</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={candValues.email}
                    onChange={handleChange}
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
                  />
                  <p className="text-danger fs-6">{formErrors.mobile}</p>
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Gender *</label>
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
                </div>

                <div class="form-group">
                  <label htmlFor="location">Current Location *</label>
                  <Input
                    type="text"
                    id="location"
                    className="form-control"
                    name="location"
                    value={candValues.location}
                    onChange={handleChange}
                  />
                  <p className="text-danger fs-6">{formErrors.location}</p>
                </div>

                <div className="form-group">
                  <label htmlFor="skills">
                    Mention Major Skills Required (comma seperated) *
                  </label>
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
              <Tab eventKey="professional" title="Professional Details">
                <div className="form-group">
                  <label htmlFor="compName">Current Company Name *</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="compName"
                    value={candValues.compName}
                    onChange={handleChange}
                  />
                  <p className="text-danger fs-6">{formErrors.compName}</p>
                </div>

                <div className="form-group">
                  <label htmlFor="compDesignation">Current Designation *</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="compDesignation"
                    value={candValues.compDesignation}
                    onChange={handleChange}
                  />
                  <p className="text-danger fs-6">
                    {formErrors.compDesignation}
                  </p>
                </div>

                <div class="form-group">
                  <label htmlFor="yoexp">Total Experience *</label>
                  <Input
                    id="yoexp"
                    className="form-control"
                    name="yoexp"
                    value={candValues.yoexp}
                    onChange={handleChange}
                  />
                  <p className="text-danger fs-6">{formErrors.yoexp}</p>
                </div>

                <div class="form-group">
                  <label htmlFor="offLocation">Office Location *</label>
                  <Input
                    id="offLocation"
                    className="form-control"
                    name="offLocation"
                    value={candValues.offLocation}
                    onChange={handleChange}
                  />
                  <p className="text-danger fs-6">{formErrors.offLocation}</p>
                </div>

                <div className="form-group">
                  <label htmlFor="compIndustry">Type Of Industry *</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="compIndustry"
                    value={candValues.compIndustry}
                    onChange={handleChange}
                  />
                  <p className="text-danger fs-6">{formErrors.compIndustry}</p>
                </div>

                <div className="form-group">
                  <label htmlFor="description">Other Details(if any)</label>
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
                <div className="form-group">
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterRecruiter;



// import React, { useEffect, useState } from "react";
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import { isEmail, isMobilePhone } from "validator";
// import { Tab, Tabs } from "react-bootstrap";
// import axios from "axios";
// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

// const vfullname = (value) => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The name must be between 3 and 20 characters.
//       </div>
//     );
//   }
// };

// const email = (value) => {
//   if (!isEmail(value)) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This is not a valid email.
//       </div>
//     );
//   }
// };

// const vusername = (value) => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The username must be between 3 and 20 characters.
//       </div>
//     );
//   }
// };

// const vpassword = (value) => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The password must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };

// const vmobile = (value) => {
//   if (!isMobilePhone(value)) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This is not a valid mobile number.
//       </div>
//     );
//   }
// };

// const RegisterRecruiter = () => {
//   const initialValues = {
//     fullname: "",
//     username: "",
//     email: "",
//     password: "",
//     mobile: "",
//     gender: "",
//     location: "",
//     skills: "",
//     compName: "",
//     compDesignation: "",
//     yoexp: "",
//     offLocation: "",
//     compIndustry: "",
//     description: "",
//     successful: false,
//   };

//   const [formValues, setFormValues] = useState(initialValues);
//   // const [formErrors, setFormErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     console.log("HIIII");
//     e.preventDefault();
//     let data = {
//       role: "recruiter",
//       fullname: formValues.fullname,
//       username: formValues.username,
//       email: formValues.email,
//       password: formValues.password,
//       mobile: formValues.mobile,
//       gender: formValues.gender,
//       location: formValues.location,
//       skills: formValues.skills,
//       compName: formValues.compName,
//       compDesignation: formValues.compDesignation,
//       yoexp: formValues.yoexp,
//       offLocation: formValues.offLocation,
//       compIndustry: formValues.compIndustry,
//       description: formValues.description,
//     };

//     const url = "http://localhost:8082/signup/recruiter";
//     const list = await axios.post(url, data);
//     console.log(list);
//     alert(list.data);
//     // } else {
//     //   alert("Enter Details Correctly");
//     // }
//   };



//   // useEffect(() => {
//   //   if (Object.keys(formErrors).length === 0) {
//   //   }
//   // }, [formErrors]);
//   return (
//     <div className="card">
//       <div>
//         <img
//           src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
//           alt="profile-img"
//           className="profile-img-card"
//         />
//         <div className="header-text">Recruiter Registration</div>
//         <Form onSubmit={handleSubmit}>
//           <div>
//             <Tabs
//               defaultActiveKey="basic"
//               id="recruiterRegister"
//               className="recruiterReg"
//             >
//               <Tab eventKey="basic" title="Basic Details">
//                 <div class="form-group">
//                   <label htmlFor="fullname">Full Name *</label>
//                   <Input
//                     type="text"
//                     className="form-control"
//                     name="fullname"
//                     value={formValues.fullname}
//                     onChange={handleChange}
//                     validations={[required, vfullname]}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="username">Username *</label>
//                   <Input
//                     type="text"
//                     className="form-control"
//                     name="username"
//                     value={formValues.username}
//                     onChange={handleChange}
//                     validations={[required, vusername]}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="password">Password *</label>
//                   <Input
//                     type="password"
//                     className="form-control"
//                     name="password"
//                     value={formValues.password}
//                     onChange={handleChange}
//                     validations={[required, vpassword]}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">Office Email *</label>
//                   <Input
//                     type="text"
//                     className="form-control"
//                     name="email"
//                     value={formValues.email}
//                     onChange={handleChange}
//                     validations={[required, email]}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="mobile">Mobile No *</label>
//                   <Input
//                     type="text"
//                     className="form-control"
//                     name="mobile"
//                     value={formValues.mobile}
//                     onChange={handleChange}
//                     validations={[required, vmobile]}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="gender">Gender *</label>
//                   <input
//                     type="radio"
//                     value="male"
//                     name="gender"
//                     // checked={gender === "male"}
//                     onChange={handleChange}
//                   />
//                   Male
//                   <input
//                     type="radio"
//                     value="female"
//                     name="gender"
//                     // checked={gender === "female"}
//                     onChange={handleChange}
//                   />
//                   Female
//                   <input
//                     type="radio"
//                     value="others"
//                     name="gender"
//                     // checked={gender === "others"}
//                     onChange={handleChange}
//                   />
//                   Others
//                 </div>
//                 <div class="form-group">
//                   <label htmlFor="location">Current Location *</label>
//                   <Input
//                     type="text"
//                     className="form-control"
//                     name="location"
//                     value={formValues.location}
//                     onChange={handleChange}
//                     validations={[required]}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="skills">
//                     Mention Major Skills Required (comma seperated) *
//                   </label>
//                   <Input
//                     type="text"
//                     className="form-control"
//                     name="skills"
//                     value={formValues.skills}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </Tab>
//               <Tab eventKey="professional" title="Professional Details">
//                 <div className="form-group">
//                   <label htmlFor="compName">Current Company Name *</label>
//                   <Input
//                     type="text"
//                     className="form-control"
//                     name="compName"
//                     value={formValues.compName}
//                     onChange={handleChange}
//                     validations={[required]}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="compDesignation">Current Designation *</label>
//                   <Input
//                     type="text"
//                     className="form-control"
//                     name="compDesignation"
//                     value={formValues.compDesignation}
//                     onChange={handleChange}
//                     validations={[required]}
//                   />
//                 </div>

//                 <div class="form-group">
//                   <label htmlFor="yoexp">Total Experience *</label>
//                   <Input
//                     type="text"
//                     className="form-control"
//                     name="yoexp"
//                     value={formValues.yoexp}
//                     onChange={handleChange}
//                     validations={[required]}
//                   />
//                 </div>
//                 <div class="form-group">
//                   <label htmlFor="offLocation">Office Location *</label>
//                   <Input
//                     type="text"
//                     className="form-control"
//                     name="offLocation"
//                     value={formValues.offLocation}
//                     onChange={handleChange}
//                     validations={[required]}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="compIndustry">Type Of Industry *</label>
//                   <Input
//                     type="text"
//                     className="form-control"
//                     name="compIndustry"
//                     value={formValues.compIndustry}
//                     onChange={handleChange}
//                     validations={[required]}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="description">Other Details(if any)</label>
//                   <Input
//                     type="textarea"
//                     className="form-control"
//                     name="description"
//                     value={formValues.description}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <button className="btn btn-primary btn-block">Sign Up</button>
//                 </div>
//               </Tab>
//             </Tabs>
//           </div>
//           <CheckButton style={{ display: "none" }} />
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default RegisterRecruiter;
