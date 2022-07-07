import './Hero.css'
import logo from '../../assets/logo.svg'
import heroRight from '../../assets/test.svg'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <div className="hero">

      <div className="hero-container">

        <div className="hero-left-container">
          
          <div className="hero-logo-wrapper">
            <img src={logo} width="96" alt="hero logo" id="hero-logo"/>
          </div>

          <div className="hero-header">Designing timeless digital experiences</div>

          <div className="hero-sub-header">Subscription UI/UX that fulfils all your design needs, whenever you need it!</div>

          <Button text="See Plans"/>

        </div>

        <div className="hero-right">
          <img src={heroRight} alt="hero right" id="hero-right-images"></img>
        </div>

      </div>
    </div>      
  )
}

export default Hero