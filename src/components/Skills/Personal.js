// import styles from "../../css/style.module.css";

const Personal = () => {
  return (
    <section id="personal" className={`personal text-center`}>
      <div className={`personal__Box aos-init`} data-aos="fade-down" data-aos-duration="700" data-aos-easing="ease-in-out">
            <h1>Personal Skills</h1>
        <div className="container p-0">
          <div className="row justify-content-around">

            <div className={`personal__card col-md-3 col-sm-12 p-0 aos-init`} data-aos="fade-down" data-aos-duration="800" data-aos-easing="ease-in-out">
              <div className={`personal__card-content`}>
                <div className={`personal__card-icon`}>
                  <svg viewBox="0 0 640 512" id="svg">             
                     <path  d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
                  </svg>
                </div>
                <h3>Presentation Skills</h3>
                <p>
                   I can make detailed presentations and present them to the team.
                </p>
              </div>
            </div>

            <div className={`personal__card col-md-3 col-sm-12 p-0 p-sm-0 aos-init`} data-aos="fade-down" data-aos-duration="800" data-aos-easing="ease-in-out">
              <div className={`personal__card-content`}>
                <div className={`personal__card-icon`}>
                <svg viewBox="0 0 640 512">
                  <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
                </div>
                <h3>Team Work</h3>
                <p>
                   I love to work in a team and this helps me to improve my skills
                </p>
              </div>
            </div>

            <div className={`personal__card col-md-3 col-sm-12 p-0 aos-init`} data-aos="fade-down" data-aos-duration="800" data-aos-easing="ease-in-out">
              <div className={`personal__card-content`}>
                <div className={`personal__card-icon`}>
                  <svg viewBox="0 0 512 512">
                      <path d="M272 256C272 264.8 264.8 272 256 272C247.2 272 240 264.8 240 256V112C240 103.2 247.2 96 256 96C264.8 96 272 103.2 272 112V256zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z"/>
                  </svg>
                </div>
                <h3>Time Management</h3>
                <p>
                I can divide my time carefully and complete my tasks on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;
