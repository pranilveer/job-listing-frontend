import React from "react";
import "./JobDetails.css";
import duration from "../../assets/icons/duration.png";
import stipend from "../../assets/icons/stipend.png";

const JobDetails = () => {
    return (
        <div className="job__details__container">
            <div className="job__details__upper">
                <span>
                    JobVariable remote(work from home) else inOffice Job/internship at
                    Variable(company Name).
                </span>
            </div>
            <div className="job__details__lower">
                <div className="job__details__first__section">
                    <span>1w ago</span>
                    <span>.</span>
                    <span>Full Time</span>
                </div>
                <div className="job__details__second__section">
                    <span>Wordpress Developement</span>
                    <button>Edit Job</button>
                </div>
                <div className="job__details__third__section">
                    <span>Banglore</span>
                    <span>|</span>
                    <span>India</span>
                </div>
                <div className="job__details__fourth__section">
                    <div className="job__details__fourth__section__left">
                        <div className="job__details__fourth__section__left__first">
                            <img src={stipend} alt="" />
                            <span>Stipend</span>
                        </div>
                        <div className="job__details__fourth__section__left__second">
                            <span> Rs 25000/month</span>
                        </div>
                    </div>
                    <div className="job__details__fourth__section__right">
                        <div className="job__details__fourth__section__right__first">
                            <img src={duration} alt="" />
                            <span>Duration</span>
                        </div>
                        <div className="job__details__fourth__section__right__second">
                            <span>6 months</span>
                        </div>
                    </div>
                </div>
                <div className="job__details__fifth__section">
                    <h1>About Company</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="job__details__sixth__section">
                    <h1>About the job/internship</h1>
                    <p>
                        Job Description: MERN Stack Developer We are seeking a skilled and
                        passionate MERN Stack Developer to join our dynamic team at
                        [Company/Organization Name]. As a MERN Stack Developer, you will be
                        responsible for developing and maintaining high-quality web
                        applications using the MERN (MongoDB, Express.js, React.js, Node.js)
                        stack. You will collaborate closely with our cross-functional team
                        to design, develop, and deploy innovative solutions that meet our
                        clients' business needs. Responsibilities: - Participate in the
                        entire software development lifecycle, including design, coding,
                        testing, and deployment of MERN stack applications. - Develop
                        user-friendly web applications using React.js, ensuring responsive
                        and efficient UI/UX. - Implement RESTful APIs using Node.js and
                        Express.js to connect the front-end with back-end services and
                        databases. - Design and optimize MongoDB databases to store and
                        retrieve data efficiently. - Collaborate with designers, product
                        managers, and other developers to translate business requirements
                        into technical solutions. - Write clean, maintainable, and efficient
                        code following best practices and coding standards. - Conduct
                        thorough testing and debugging of applications to ensure
                        high-quality deliverables. - Stay updated with the latest trends and
                        advancements in MERN stack development and incorporate them into our
                        projects. - Troubleshoot and resolve software defects and issues
                        reported by clients or internal teams. - Collaborate with the DevOps
                        team to ensure smooth deployment and release management of
                        applications. Requirements: - Bachelor's degree in Computer Science,
                        Software Engineering, or a related field (or equivalent work
                        experience). - Proven experience as a MERN Stack Developer or
                        similar role, with a strong portfolio of web development projects. -
                        Proficiency in front-end development using React.js, HTML, CSS, and
                        JavaScript. - Strong knowledge of server-side JavaScript frameworks
                        like Node.js and Express.js. - Solid understanding of MongoDB and
                        database design principles. - Experience with version control
                        systems (e.g., Git) and agile development methodologies. -
                        Familiarity with cloud platforms (e.g., AWS, Azure) and deployment
                        tools (e.g., Docker, Kubernetes) is a plus. - Strong problem-solving
                        skills and ability to work in a fast-paced, collaborative
                        environment. - Excellent communication and teamwork skills, with the
                        ability to effectively convey technical concepts to both technical
                        and non-technical stakeholders. Join our innovative and driven team
                        of professionals, where you will have the opportunity to contribute
                        to cutting-edge projects and make a significant impact. Apply now
                        and be part of our exciting journey as we revolutionize the world of
                        web development using the MERN stack. Note: Please include a link to
                        your portfolio or any relevant work samples along with your
                        application. Only shortlisted candidates will be contacted.
                    </p>
                </div>
                <div className="job__details__seventh__section">
                    <h1>Skill(s) Required</h1>
                    <p>HTML CSS JavaScript MongoDB Node.js Express.js ReactJS</p>
                </div>
                <div className="job__details__eighth__section">
                    <h1>Additional Information</h1>
                    <p>Number of openings 2</p>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;