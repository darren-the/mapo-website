import './Frames.css'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Frames = () => {
  const refAnimate = useRef()
  useEffect(() => {
    gsap.fromTo(refAnimate.current, {x: 500}, {x: -900, scrollTrigger: {
      trigger: refAnimate.current,
      markers: false,
      start: 'top 70%',
      end: 'bottom 20%',
      scrub: true
    }})
  }, [])
  return (
    <div className="frames">

        <div className="frames-pane" ref={refAnimate}>
          {[...Array(8).keys()].map(i => i + 1).map(x => 
            <img src={require('../../assets/frame' + x + '.png')} alt={"frame" + x} className="frame" id={"frame" + x}></img>
          )}
        </div>
        
    </div>
  )
}

export default Frames