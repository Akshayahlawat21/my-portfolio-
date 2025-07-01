import './Skills.css';
import javaLogo from './assets/java.jpg';
import reactLogo from './assets/react.jpg';
import jsLogo from './assets/javascript.jpg';
import htmlLogo from './assets/html.jpg';
import cssLogo from './assets/css.jpg';

import githubLogo from './assets/Github.jpg';


function Skills() {
  return (
    <div className="skills-section">
      <div className="skills-column">
        <h2 className="skills-heading">Core Skills</h2>
        <div className="skills-grid">
          <SkillCard name="JavaScript" img={jsLogo} />
          <SkillCard name="React" img={reactLogo} />
          <SkillCard name="HTML" img={htmlLogo} />
          <SkillCard name="CSS" img={cssLogo} />
          <SkillCard name="C++" img={javaLogo} />
          <SkillCard name="GitHub" img={githubLogo} />
        </div>
      </div>

      <div className="skills-column">
        <h2 className="skills-heading">Other Skills</h2>
        <div className="skills-grid">
          <h1>-DSA</h1>
          <h1>-API</h1>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ name, img, link }) {
  const content = (
    <div className="skill-card">
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );

  return link ? <a href={link} target="_blank" rel="noopener noreferrer">{content}</a> : content;
}

export default Skills;