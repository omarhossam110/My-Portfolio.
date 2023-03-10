// import styles from "../css/style.module.css";

// import img1 from '../assets/images/natours.png';
// import img2 from '../assets/images/trillo.png';

const Portfolio = () => {
  return (
    <div className={`portfolio text-center`} id="portfolio">
      <div className={`portfolio__Box aos-init`} data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-out">
        <h1 className={`headingPrimary m-0`}>Portfolio</h1>  
        <div className="container p-0">  
        
          <div className="row justify-content-between"> 

            <div className="col-sm-12 p-0">
              <h5 className={`portfolio__intro`}>Templates Created with 
              <span> SASS</span>
              </h5>
            </div>

            <div  className={`portfolio__left-card ms-md-5  col-md-5 col-sm-12  p-0 aos-init`} data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in">
              <h2 className={`portfolio__card-title`}>01</h2>

              <div className={`portfolio__card portfolio__image1`}>
             
              {/* <div className={`portfolio__card-img`}>
                <img src={img1} alt="" />
              </div> */}

                <div className={`portfolio__card-content`}>
                  <button className={`portfolio__card-button`}> 
                  <a href="https://resturant10.netlify.app/"
                      className="title"
                      target="_blank" rel="noreferrer">View</a>
                  </button>
                </div>
              </div>
            </div>

            
            <div className={`portfolio__right-card me-md-5  col-md-5  col-sm-12  p-0 aos-int`} data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in">
              <h2 className={`portfolio__card-title`}>02</h2>
              <div className={`portfolio__card portfolio__image2`}>

              {/* <div className={`portfolio__card-img`}>
                <img src={img2} alt="" />
              </div> */}

                <div className={`portfolio__card-content`}>
                  <button className={`portfolio__card-button`}>
                    <a
                      href="https://e-bussenis.netlify.app/"
                      target="_blank"
                      className="title"
                      rel="noreferrer">
                      View
                    </a>
                  </button>
                </div>

              </div>
            </div>

            
            <div  className={`portfolio__left-card ms-md-5  col-md-5 col-sm-12 p-0 aos-init`} data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in">
              <h2 className={`portfolio__card-title`}>03</h2>
              <div className={`portfolio__card portfolio__image3`}>
                <div className={`portfolio__card-content`}>
                  <button className={`portfolio__card-button`}>
                    <a
                      href="https://fitnez.netlify.app/"
                      target="_blank"
                      className="title"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  </button>
                </div>
              </div>
            </div>

            
            {/* <div className={`portfolio__right-card`}  me-md-5  col-md-5  col-sm-12 p-0`}>
              <h2 className={`portfolio__card-title`}>04</h2>
              <div className={`portfolio__card}`}>
                <div className={`portfolio__card-content`}>
                  <button className={`portfolio__card-button`}>
                    <a
                      href="https://adoring-einstein-29bce8.netlify.app/"
                      target="_blank"
                      className="title"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  </button>
                </div>
              </div>
            </div> */}

            
            {/* <div  className={`portfolio__left-card`} ms-md-5  col-md-5 col-sm-12 p-0`}>
              <h2 className={`portfolio__card-title`}>05</h2>
              <div className={`portfolio__card image9`}>
                <div className={`portfolio__card-content`}>
                  <button className={`portfolio__card-button`}>
                    <a
                      href="https://coffe5.netlify.app/"
                      target="_blank"
                      className="title"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  </button>
                </div>
              </div>
            </div> */}

            <div className="col-sm-12 p-0 aos-init" data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-out">
              <h5 className={`portfolio__intro`}>Small Projects with
              <span> React-js</span>
              </h5>
            </div>


            <div className={`portfolio__left-card ms-md-5  col-md-5 col-sm-12 p-0 aos-init`} data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in">
              <h2 className={`portfolio__card-title`}>01</h2>
              <div className={`portfolio__card portfolio__image4`}>
                <div className={`portfolio__card-content`}>
                  <button className={`portfolio__card-button`}>
                    <a
                      href="https://colorpicked.netlify.app/"
                      target="_blank"
                      className="title"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  </button>
                </div>
              </div>
            </div>

        
            <div  className={`portfolio__right-card me-md-5  col-md-5  col-sm-12 p-0 aos-init`} data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in">
              <h2 className={`portfolio__card-title`}>02</h2>
              <div className={`portfolio__card portfolio__image5`}>
                <div className={`portfolio__card-content`}>
                  <button className={`portfolio__card-button`}>
                    <a
                      href="https://frescas.netlify.app/"
                      target="_blank"
                      className="title"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  </button>
                </div>
              </div>
            </div>

          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
