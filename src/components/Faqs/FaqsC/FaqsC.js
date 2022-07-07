import './FaqsC.css'
import { useState, useRef } from "react"

const FaqsC = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const descRef = useRef()

  return (
    <div className="faqsc">

      <button 
        onClick={() => {setIsOpen(!isOpen)}}
        className="faqsc-button"
      >
        <span className="faqsc-button-label">{props.label}</span>
      </button>

      <div className={
        isOpen ? "faqsc-triangle active" : "faqsc-triangle"
      }></div>

      <div 
        className="faqsc-desc"
        onClick={() => setIsOpen(!isOpen)}
        ref={descRef}
        style={isOpen ? {
          height: descRef.current.scrollHeight + "px",
        } : {
          height: "0px"
        }}>{props.children}
      </div>

    </div>
  )
}

export default FaqsC