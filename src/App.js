import Hero from './components/Hero/Hero'
import Frames from './components/Frames/Frames'
import Features from './components/Features/Features'
import PM from './components/PM/PM'
import Plans from './components/Plans/Plans'
import Faqs from './components/Faqs/Faqs'
import BottomLogo from './components/BottomLogo/BottomLogo'
import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const App = () => {
  const plansScrollRef = useRef()
  const location = useLocation()
  useEffect(() => {
    if (location.state.scrollToPlans) plansScrollRef.current.scrollIntoView()
  }, [location])

  return (
    <div className="container">
      <Hero plansScrollRef={plansScrollRef}/>
      <Frames />
      <PM plansScrollRef={plansScrollRef}/>
      <Features />
      <Plans plansScrollRef={plansScrollRef}/>
      <Faqs />
      <BottomLogo />
    </div>
  );
}

export default App;
