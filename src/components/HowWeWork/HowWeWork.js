import './HowWeWork.css'

const HowWeWork = () => {
  return (
    <div className="how-we-work-container">
        <div className="how-we-work-top">

            <div className="steps-wrapper">
                <div className="steps-container">

                    <div className="step-item">

                        <div className="step-number-item">
                            <img src={require("../../assets/step-circle.png")} alt="step circle" className="step-circle"></img>
                            <div className="step-number">1</div>
                        </div>

                        <div className="step-desc">Subscribe to a monthly plan</div>

                    </div>

                    <div className="step-item">

                        <div className="step-number-item">
                            <img src={require("../../assets/step-circle.png")} alt="step circle" className="step-circle"></img>
                            <div className="step-number">2</div>
                        </div>
                        
                        <div className="step-desc">Submit a Project Brief to request for designs</div>

                    </div>

                    <div className="step-item">

                        <div className="step-number-item">
                            <img src={require("../../assets/step-circle.png")} alt="step circle" className="step-circle"></img>
                            <div className="step-number">3</div>
                        </div>

                        <div className="step-desc">Completed in a few days, and revised until you love it!</div>

                    </div>

                </div>
            </div>
            
            <div className="span01-wrapper">
                <img src={require("../../assets/span01.png")} alt="span 01" id="span01"></img>
            </div>
            <img src={require("../../assets/design-board.png")} alt="design board" id="design-board"></img>

        </div>
        <div className="how-we-work-bottom">
            <div className="how-we-work-header">how we work</div>
        </div>
    </div>
  )
}

export default HowWeWork