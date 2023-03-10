import Technical from "./Technical";
import Personal from "./Personal";

// import styles from "../../css/style.module.css";


const Skills = (props) => {
  const skillsList = props.TechnicalSkills;

  return (
    <div className={`skills`}>
      <Technical SkillsList={skillsList}></Technical>
      <Personal></Personal>
    </div>
  );
};

export default Skills;
