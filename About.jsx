// About.jsx

import myImage from './assets/akshay.png'; // Apni image ka correct path daal

function About() {
  return (
    <div className="about-container">
      {/* Left Side - Image */}
      <div className="about-left">
        <img src={myImage} alt="Akshay" className="about-image" />
      </div>

      {/* Right Side - About Me */}
      <div className="about-right">
        <h2>About Me</h2>
        <p>
        Hey! I'm <strong>Akshay</strong>, a B.Tech student in <strong>ECE</strong> from <strong>USICT</strong>.
          I’m passionate about <strong>Web Development</strong> and have a solid grasp on <strong>Data Structures & Algorithms (DSA)</strong>.
          I enjoy building user-friendly, clean interfaces and learning new tech along the way.
        </p>
      </div>
    </div>
  );
}

export default About;
