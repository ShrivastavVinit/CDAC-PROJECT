import { unstable_useForkRef } from '@mui/utils';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function RecruiterDashboard() {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const [jobs, setJobs] = useState([]);
    //const [currentJob, setCurrentJob] = useState("");
    const [currentJob, setCurrentJob] = useState("");
    const [jobb, setJobb] = useState("");
    const [currentIndex, setCurrentIndex] = useState(-1);
    const navigate = useNavigate();


    const viewJobs = (id) => {
        axios.get(`http://localhost:8082/view/job/${id}`).then(response => {
            setJobs(response.data);
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        })
    };

    const setActiveJob = (job, index) => {
        setCurrentJob(job);
        console.log("current job ", currentJob);
        console.log("job is", job);
        console.log(job);

        setCurrentIndex(index);
        setJobb(job);
        console.log(jobb, " jobb is ");
        console.log("currentjob is");

    }

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
            viewJobs(currentUser.userId)
        }
    }, []);

    return (
        <div>
            <div className="header-main">
                <p>DASHBOARD</p>
            </div>
            <br />
            <div className="card">
                <div>
                    <div className="mini-card">
                        <div className="header-sub">
                            <p>Create New Job Post</p>
                        </div>
                        <br />
                        <Button variant="success" href="JobPost">New Job Post +</Button>{' '}
                    </div>
                    <br />
                </div>
                <br />
                <div className="card">
                    <div className="header-sub">
                        <p>Job Posting Updates</p>
                    </div>
                    <div className='list-itemzz'>
                        <ul className="list-group">
                            {jobs &&
                                jobs.map((job, index) => (
                                    <li
                                        className={
                                            "list-group-item " +
                                            (index === currentIndex ? "active" : "")
                                        }
                                        onClick={() => setActiveJob(job, index)}
                                        key={index}
                                    >
                                        {job.jobTitle}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <br />
                    <div>
                        {currentJob ? (
                            <div>
                                {/* {console.log("jobid...", currentJob.jobid)}; */}
                                <Button variant="success" href={`/CandidateApplied/${currentJob.jobid}`}>View Candidates Applied</Button>{' '}
                            </div>
                        ) : (
                            <div>
                                <br />
                                <b>Click on the created Job to track status</b>
                            </div>
                        )}
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}

export default RecruiterDashboard