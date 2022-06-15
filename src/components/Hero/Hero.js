import './Hero.css'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-centre-container">
        <div className="main-header">Design for product</div>
        <div className="sub-header">shipping quality designs with 0 meetings & unlimited revisions</div>
        <Button top="75px" text="View Subscriptions"/>
      </div>
      <img src={require("../../assets/logo.png")} alt="logo" id="hero-logo"></img>
      <img src={require("../../assets/bottom_left_swirl.png")} alt="bottom left swil" id="hero-bottom-left-swirl"></img>
      <img src={require("../../assets/bottom_left_shapes.png")} alt="bottom left shapes" id="hero-bottom-left-shapes"></img>
      <img src={require("../../assets/top_right_swirl.png")} alt="top right swirl" id="hero-top-right-swirl"></img>
      <img src={require("../../assets/top_right_shapes.png")} alt="top right shapes" id="hero-top-right-shapes"></img>
      <img src={require("../../assets/happy bao.png")} alt="happy bao" id="happy-bao"></img>
    </div>      
  )
}

export default Hero