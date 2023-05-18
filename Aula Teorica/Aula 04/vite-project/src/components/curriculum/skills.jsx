import Title from "./title";

const Skill = ({ title, skill }) => {
  const dots = Array.from({ length: 5 });
  return (
    <div className="skill">
      <div className="title">{title}</div>

      <div className="dots">
        {dots.map((_, i) => (
          <div className={`dot ${i <skill ? "full" : ""}`} key={i} />
        ))}
      </div>
    </div>
  );
};

const Skills = ({ skills }) => {
  return (
    <div className="skills">
      <Title>Skills</Title>
      {skills.map(({ title, skill }, index) => (
        <Skill 
          key={index}
          title={title}
          skill={skill}
         />
      ))}
    </div>
  );
};
export default Skills;
