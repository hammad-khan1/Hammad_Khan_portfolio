import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer & App Developer</h4>
                <h5>ALGO HUB — Software Technology Park, UET Mardan</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and developing user-focused mobile application interfaces,
              improving UI/UX quality and visual consistency across multiple product
              screens. Collaborating with cross-functional teams to deliver functional
              app features, and contributing graphic design assets including icons,
              layouts, and branding elements used in live product deployments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Early Student Contributor</h4>
                <h5>ALGO HUB — Software Technology Park, UET Mardan</h5>
              </div>
              <h3>DEC 2025</h3>
            </div>
            <p>
              Selected as one of the first student contributors at ALGO HUB,
              a professional tech hub within UET Mardan. Shipped real-world apps
              and design products while applying principles of human-computer
              interaction and accessibility to create intuitive digital experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.S. Computer Science Student</h4>
                <h5>University of Engineering and Technology (UET), Mardan</h5>
              </div>
              <h3>SEP 2024</h3>
            </div>
            <p>
              Pursuing a Bachelor of Science in Computer Science with coursework in
              Data Structures & Algorithms, Object-Oriented Programming, Operating
              Systems, Computer Networks, Software Engineering, and Database Systems.
              Active member of the Software Technology Park innovation hub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
