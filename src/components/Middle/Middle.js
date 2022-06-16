import './Middle.css'
import Features from '../Features/Features'
import WeHelpWith from '../WeHelpWith/WeHelpWith'
import Perks from '../Perks/Perks'
import HowWeWork  from '../HowWeWork/HowWeWork'

const Middle = () => {
  return (
    <div className="middle">
      <div className="middle-container">
        
        <div className="middle-empty-space"></div>
        <WeHelpWith />
        <div className="middle-empty-space" style={{height: "40px"}}></div>
        <Perks />
        <div className="middle-empty-space"></div>
        <HowWeWork />
        <div className="middle-empty-space"></div>
      </div>
    </div>
  )
}

export default Middle