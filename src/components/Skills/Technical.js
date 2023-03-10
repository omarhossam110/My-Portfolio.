
import TechnicalCard from "./TechnicalCard";

// import styles from "../../css/style.module.css";


const Technical = (props) => {
  const skills = props.SkillsList;

  return (
    <section id="technical" className={`technical text-center`}>
      
        <div className={`technical__box moveInRight aos-init`} data-aos="fade-down" data-aos-duration="700" data-aos-easing="ease-in-out">
          <h1>Technical Skills</h1>
          
            <TechnicalCard mySkills={skills}></TechnicalCard>
     
        </div>
      
    
    </section>
  );
};

export default Technical;
