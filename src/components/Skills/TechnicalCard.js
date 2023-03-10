// import styles from "../../css/style.module.css";


const TechnicalCard = (props) => {
  return (
    <div className={`row w-100 justify-content-center`}>
      {/* This Is The Map Function that renders the technical_skills list*/}
      {props.mySkills.map((skill) => (
        <div className={` technical__card p-0 col-md-3 col-sm-12 aos-init`} data-aos="fade-down" data-aos-duration="800" data-aos-easing="ease-in-out">
          <div className="box">
            <div className={`percent`}>
              <svg className={`technical__svg`}>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className={`percent__number`}>
                <h2>
                  {skill.percent}
                  <span> %</span>
                </h2>
              </div>
            </div>
            <h2 className={`technical__card-text`}>
              {skill.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnicalCard;
