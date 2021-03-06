import './Hero.css'
import logo from '../../assets/logo.svg'
import heroRight from '../../assets/test.svg'
import Button from '../Button/Button'

const Hero = (props) => {
  return (
    <div className="hero">

      <div className="hero-container">

        <div className="hero-logo-wrapper">
          <img src={logo} alt="hero logo" id="hero-logo"/>
        </div>
        <div className="hero-right">
          <img src={heroRight} alt="hero right" id="hero-right-images"></img>
        </div>
        <div className="hero-header">Designing timeless digital experiences</div>
        <div className="hero-sub-header">Subscription UI/UX that fulfils all your design needs, whenever you need it!</div>
        <div className="hero-button-wrapper">
          <Button text="See Plans" _onClick={() => {props.plansScrollRef.current.scrollIntoView({ behavior: 'smooth' })}}/>
        </div>
        
      </div>

      <div className="hero-gradient-wrapper">
          <div id="hero-gradient"></div>
      </div>

    </div>      
  )
}
//<img src={gradient} alt="hero gradient" id="hero-gradient"/>
export default Hero