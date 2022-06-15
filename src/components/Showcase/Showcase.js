import './Showcase.css'
import Button from "../Button/Button"
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Showcase = () => {
  const refAnimate = useRef()
  useEffect(() => {
    gsap.fromTo(refAnimate.current, {x: 0}, {x: -500, scrollTrigger: {
      trigger: refAnimate.current,
      markers: false,
      start: 'top 60%',
      end: 'bottom 40%',
      scrub: true
    }})
  }, [])
  return (
    <div className="showcase">
        <div className="showcase-bar" ref={refAnimate}>
          <img src={require("../../assets/box1.png")} alt="box1" className="showcase-box"></img>
          <img src={require("../../assets/box2.png")} alt="box2" className="showcase-box"></img>
          <img src={require("../../assets/box3.png")} alt="box3" className="showcase-box"></img>
          <img src={require("../../assets/box4.png")} alt="box4" className="showcase-box"></img>
        </div>
        <Button top="20px" bgColor="#FFC997" text="View Projects" textColor="black"></Button>
        
    </div>
  )
}

export default Showcase