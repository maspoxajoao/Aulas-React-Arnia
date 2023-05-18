import Expirience from "../../utils/expierience";

const WorkExpirience2 = () => {
  return (
    <div>
      <div className="experience-container">
        {Expirience.slice(1, 4).map((exp, index) => (
          <div key={index} className="experience">
            <div className="period">
              <h3>{exp.title}</h3>
              <p>{exp.period}</p>
            </div>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExpirience2;
