import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'
// import amol from '../img/Amol.jpeg';
// import aniket from '../img/Aniket.jpeg';
// import pradnya from '../img/Pradnya.jpg';
// import awesh from '../img/Awesh.jpeg';




function About() {
    useEffect(() => {
        Aos.init({ duration: 2500, delay: 300 });
    }, []);

    return (
        <div className="bodya">
            <div className="container_AboutUs">
                <div className="Job">
                    <p><span>R</span>ozgar.com is an Indian employment website operating in India and Around the World.</p>
                </div>
                <div className="website f1">
                    {/* <div className="websitelogo">
            <img src={logo} alt="name" />
          </div> */}
                    <div data-aos="fade" className="websitecont">
                        Rozgar.com Portal is uniquely designed to bridge. the gap between a recruiter and a suitable candidate, in times when digital transformation is becoming a need for the industry. This project typically eases the entire recruitment process cycle starting from job search to candidates onboarding in a certain company.
                    </div>
                </div>
                <div data-aos="fade-left" className="technology f1">
                    <div className="title">Technology</div>
                    <ul>
                        <li>The Spring Framework is an application framework and inversion of control container for the Java platform.</li>
                        <li>J2EE is a platform-independent, Java-centric environment from Sun/Oracle for developing, building and deploying Web-based enterprise applications online.</li>
                        <li>React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.</li>
                    </ul>


                </div>
                <div data-aos="fade-left" className="team f1">
                    <div className="title">Team</div>
                    <div data-aos="fade-right" className="teamcard">
                        {/* <img src={awesh} alt="name" /> */}

                        <div className="teamcont">
                            <ul>
                            <li>Awesh Shaikh</li>
                                <li>PRN:210940520019</li>
                                <li>awesh.shaikh1998@gmail.com </li>
                                <li>Ph:8390784543</li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="teamcard">
                        {/* <img src={aniket} alt="name" /> */}
                        <div className="teamcont">
                            <ul>
                                <li>Aniket Takmare</li>
                                <li>PRN:210940520013</li>
                                <li>anikettakmare1995@gmail.com</li>
                                <li>Ph:8554008861</li>
                            </ul>
                        </div>


                    </div>
                    <div data-aos="fade-right" className="teamcard">
                        {/* <img src={pradnya} alt="name" /> */}

                        <div className="teamcont">
                            <ul>
                                <li>Pradnya Dhamale</li>
                                <li>PRN:210940320082</li>
                                <li>pdhamale1178@gmail.com</li>
                                <li>Ph:7709077131</li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="teamcard">
                        {/* <img src={amol} alt="name" /> */}
                        <div className="teamcont">
                            <ul>
            


                                <li>Amol Patil</li>
                                <li>PRN:210940320018</li>
                                <li>pamol3905@gmail.com</li>
                                <li>Ph:8329762561</li>
                            </ul>
                        </div>

                    </div>


                </div>


            </div>
        </div>
    );
}

export default About;

