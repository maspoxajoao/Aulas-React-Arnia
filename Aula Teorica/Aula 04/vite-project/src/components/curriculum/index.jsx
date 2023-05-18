import "./styles.css";
import Header from "./header";
import Hero from "./hero";
import Title from "./title";
import Skills from "./skills";
import WorkExpirience1 from "./WorkExpirience1"
import WorkExpirience2 from "./WorkExpirience2"
import WorkExpirience3 from "./WorkExpirience3"


const skills = [
  { title: "Flutter", skill: 3 },
  { title: "React Native", skill: 3 },
  { title: "Ionic", skill: 4 },
  { title: "Unity", skill: 5 },
];

const Curriculum = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Title>About me </Title>
      <WorkExpirience1 />
      <Title> Education</Title>
      <WorkExpirience2 />
      <Title>Education </Title>
      <WorkExpirience3 />
      <Skills skills={skills} />
    </div>
  );
};

export default Curriculum;
