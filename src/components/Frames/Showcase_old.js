import './Showcase.css'
import Marquee from "react-fast-marquee"
import Button from "../Button/Button"

const Showcase = () => {
  return (
    <div className="showcase">
        <Marquee className="marquee-container" speed="175" gradient={false}>
          <img src={require("../../assets/box1.png")} alt="box1" className="showcase-box"></img>
          <img src={require("../../assets/box2.png")} alt="box2" className="showcase-box"></img>
          <img src={require("../../assets/box3.png")} alt="box3" className="showcase-box"></img>
          <img src={require("../../assets/box4.png")} alt="box4" className="showcase-box"></img>
        </Marquee>
        <Button top="20px" bgColor="#FFC997" text="View Projects" textColor="black"></Button>
    </div>
  )
}

export default Showcase