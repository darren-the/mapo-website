import './How.css'

const How = () => {
  return (
    <div className="how">
        <div className="how-container">

            <div className="how-header-wrapper">
                <div className="how-header">How it Works</div>
            </div>

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
                    
                    <div className="step-desc" id="step-desc2">Submit as many briefs as you like to request for designs!</div>

                </div>

                <div className="step-item">

                    <div className="step-number-item">
                        <img src={require("../../assets/step-circle.png")} alt="step circle" className="step-circle"></img>
                        <div className="step-number">3</div>
                    </div>

                    <div className="step-desc">Completed one-by-one in a few days, & revised until you love it!</div>

                </div>

            </div>
            
            <img src={require("../../assets/how-video.png")} alt="how video" id="how-video"></img>

            
        </div>
    </div>
    
  )
}

export default How