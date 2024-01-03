// import styles from "../css/style.module.css";

const About = () => {
  return (
    <section id="about" className={`about`}>
      <div
        className={`about__box moveInRight  aos-init`}
        data-aos="fade-down"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
      >
        <h1 className={`text-center`}>
          <span className={`headingPrimary`}>About Me </span>
        </h1>

        <div className="container p-0">
          <div className="row justify-content-center">
            <div className={`about__image  col-md-4 col-sm-12 p-0`}>
              <img
                className="img-responsive img-fluid aos-init"
                src={require("../assets/images/about_img.jpg")}
                alt="about"
                width={200}
                height={250}
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
              />
              <h1
                className="aos-init"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
              >
                Omar Hossam
              </h1>
            </div>

            <div className={`about__info col-md-5 col-sm-12 p-0`}>
              <div className={`about__info-padding`}>
                <p className={`about__paragraph`}>
                “Hello, my name is Omar Hossam. I’m a 25 years old Frontend Developer from Cairo. Here are some information about me:
                </p>

                <div className={`about__content`}>
                  <div className={`about__info-description`}>
                    <span className={`about__info-title`}>
                      <svg className={`about__info-svg`} viewBox="0 0 448 512">
                        <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                      </svg>
                      Birthday:
                    </span>
                    <span className={`about__info-span  `}>1/8/1998</span>
                  </div>

                  <div className={`about__info-description`}>
                    <span className={`about__info-title`}>
                      <svg className={`about__info-svg`} viewBox="0 0 384 512">
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                      </svg>
                      Address:
                    </span>
                    <span className={`about__info-span  `}>Cairo, Egypt</span>
                  </div>

                  <div className={`about__info-description`}>
                    <span className={`about__info-title`}>
                      <svg className={`about__info-svg`} viewBox="0 0 640 512">
                        <path d="M218.3 8.5c12.3-11.3 31.2-11.3 43.4 0l208 192c6.7 6.2 10.3 14.8 10.3 23.5H336c-19.1 0-36.3 8.4-48 21.7V208c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64V416H112c-26.5 0-48-21.5-48-48V256H32c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8.1-35.2l208-192zM352 304V448H544V304H352zm-48-16c0-17.7 14.3-32 32-32H560c17.7 0 32 14.3 32 32V448h32c8.8 0 16 7.2 16 16c0 26.5-21.5 48-48 48H544 352 304c-26.5 0-48-21.5-48-48c0-8.8 7.2-16 16-16h32V288z" />
                      </svg>
                      Freelance:
                    </span>
                    <span className={`about__info-span  `}>Available</span>
                  </div>

                  <div className={`about__info-description`}>
                    <span className={`about__info-title`}>
                      <svg className={`about__info-svg`} viewBox="0 0 512 512">
                        <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                      </svg>
                      Phone:
                    </span>
                    <span className={`about__info-span  `}>01004938289</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
