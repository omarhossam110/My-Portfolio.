const Navigation = ()=>{
  return(

    <div class="navigation">
            <input id="navi-toggle" type="checkbox" class="navigation__checkbox"></input>

            <label htmlFor="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="#about" class="navigation__link"><span>01</span>About Me</a></li>
                    <li class="navigation__item"><a href="#technical" class="navigation__link"><span>02</span>Technical Skills</a></li>
                    <li class="navigation__item"><a href="#personal" class="navigation__link"><span>03</span>Personal Skills</a></li>
                    <li class="navigation__item"><a href="#portfolio" class="navigation__link"><span>04</span>Portfolio</a></li>
                    {/* <li class="navigation__item"><a href="#f" class="navigation__link"><span>05</span>Book Now!</a></li> */}
                </ul>
            </nav>
   </div>
  );
}

export default Navigation;