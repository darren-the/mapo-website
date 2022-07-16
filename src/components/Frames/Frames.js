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
    const is550px = useMediaQuery('only screen and (max-width: 550px')
    if (is550px) return -1825
    if (is750px) return -2425
    if (is950px) return -2200
    if (is1250px) return -1900
    if (is1440px) return -1675
    return { from: 0, to: 0 }
  } 

  const isTouchScreen = useMediaQuery('(hover: none)')
  const to = useScreenWidth()

  const refAnimate = useRef()
  const refFrames = useRef()
  useEffect(() => {
    if (isTouchScreen) {
      refFrames.current.style.overflowX = 'scroll'
      //  TODO: how to remove gsap animation? Not urgent but if somehow a user switches
      // from pc -> touchscreen, the animation will still remain when it should be removed.
    } else {
      refFrames.current.style.overflowX = 'clip'
      gsap.fromTo(refAnimate.current, {x: 0}, {x: to, scrollTrigger: {
        trigger: refAnimate.current,
        markers: false,
        start: 'top 70%',
        end: 'bottom 20%',
        scrub: true
      }})
    }
  }, [to, isTouchScreen])

  return (
    <div className="frames" ref={refFrames}>

        <div className="frames-pane" ref={refAnimate}>
          {[...Array(8).keys()].map(i => i + 1).map(x => 
            <img src={require('../../assets/frame' + x + '.png')} alt={"frame" + x} className="frame" id={"frame" + x}></img>
          )}
        </div>
        
    </div>
  )
}

export default Frames