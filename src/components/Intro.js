// import styles from "../css/style.module.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className='row'>
          <div className="intro__text"> 
             <div className="home">
                 <h2 className="headingPrimary intro__text-h2 headingPrimaryToRight">Omar Hossam</h2> 
                 <p className="headingSecondary headingSecondaryToLeft">I'm Front-end Developer</p>
                 {/* <p className="me"></p> */}
                 <a href="https://drive.google.com/file/d/11_hXEO8bxqhv8XZX22l-bthvCnsUhHDT/view?usp=sharing" class="btn btn--animated intro-btn headingPrimary" target="_blank" rel="noreferrer">
                  Download My Cv
                 </a>
             </div>
          </div>       
      </div>  
    </section>

  );
};

export default Intro;
