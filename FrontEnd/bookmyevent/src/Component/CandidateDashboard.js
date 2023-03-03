import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function CandidateDashboard() {
    const navigate = useNavigate();
    const [currentApplication, setCurrentApplication] = useState([]);
    const [currentIndex, setcurrentIndex] = useState(-1);
    const [currentJob, setCurrentJob] = useState("");
    // const trackJobs = (id) => {
    //     const list = axios.get(API_URL + `track/job/${id}`);
    //     setCurrentApplication(list.data);


    // }
    const setActiveJob = (job, index) => {
        setcurrentIndex(index);
        setCurrentJob(job.job);
        console.log("current job ", currentJob);
        console.log("job is", job);
    };

    useEffect(() => {
        if (localStorage.getItem("user") == null) {
            Swal.fire({
                icon: "error",
                title: "Login Required",
                text: "please login to stay on this page"
            })
            navigate("/Login");
        }
        else {
            const user = JSON.parse(localStorage.getItem('user'));
            const id = user.userId;
            // const list = axios.get(`Http://localhost:8082/track/job/${id}`);
            // console.log("data is : " + list.data);
            // setCurrentApplication(list.data);
            axios.get(`Http://localhost:8082/track/job/${id}`).then((response) => {
                // console.log(response.data);
                setCurrentApplication(response.data);

            }).catch((e) => {
                console.log(e.error);
            })
        }
    }, []
    );


    return (
        <div className="container">
            <div className="header-main">
                <p>DASHBOARD</p>
            </div>
            <div className="card">
                <div>
                    <div className="mini-card">
                        <div className="header-sub">
                            <p>Job Search</p>
                        </div>
                        <br />
                        <Button variant="success" href="get/job">Search and Apply</Button>
                    </div>
                    <br />
                </div>
                <br />
                <div className="card">
                    <div className="header-sub">
                        <p>Jobs Applied Updates</p>
                    </div>
                    <div className='list-itemzz'>
                        <ul className="list-group">
                            {currentApplication &&
                                currentApplication.map((job, index) => (
                                    <li
                                        className={
                                            "list-group-item " +
                                            (index === currentIndex ? "active" : "")
                                        }
                                        onClick={() => {
                                            setActiveJob(job, index);
                                            // console.log("job is : ", job);
                                        }}
                                        key={index}
                                    >
                                        {job.job.jobTitle}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <br />
                    <div>
                        {currentJob ? (
                            <div className="mini-card1">
                                <Button variant="success" id="status-button" href={`/checkStatus/${currentJob.jobid}`}>Check Status</Button>
                                {/* <button type="button" className="btn btn-danger" id="status-button">Reject Job</button> */}
                            </div>
                        ) : (
                            <div>
                                <br />
                                <b>Click on the applied Job to track status</b>
                            </div>
                        )}
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}

export default CandidateDashboard