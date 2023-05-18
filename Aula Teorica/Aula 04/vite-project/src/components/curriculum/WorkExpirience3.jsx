import Expirience from "../../utils/expierience";

const WorkExpirience3 = () => {
    return (
      <div className="experience-container">
        {Expirience.slice(4, 7).map((exp, index) => (
          <div key={index}  className="experience">
            <div className="period">
                <h3>{exp.title}</h3>
                <p>{exp.period}</p>
            </div>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    );
  };

  export default WorkExpirience3;
  