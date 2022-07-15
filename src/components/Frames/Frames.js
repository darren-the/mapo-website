import './Frames.css'
import { useRef, useEffect } from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Frames = () => {
  const useScreenWidth = () => {
    const is1440px = useMediaQuery('only screen and (max-width: 1440px')
    const is1250px = useMediaQuery('only screen and (max-width: 1250px')
    const is950px = useMediaQuery('only screen and (max-width: 950px')
    const is750px = useMediaQuery('only screen and (max-width: 750px')
    if (is750px) return { from: 850, to: -900 }
    if (is950px) return { from: 750, to: -900 }
    if (is1250px) return { from: 650, to: -900 }
    if (is1440px) return { from: 500, to: -900 }
    return { from: 0, to: 0 }
  } 
  const fromTo = useScreenWidth()

  const refAnimate = useRef()
  useEffect(() => {
    gsap.fromTo(refAnimate.current, {x: fromTo.from}, {x: fromTo.to, scrollTrigger: {
      trigger: refAnimate.current,
      markers: false,
      start: 'top 70%',
      end: 'bottom 20%',
      scrub: true
    }})
  }, [fromTo])

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