import './Plans.css'
import Button from '../Button/Button'

const Plans = () => {
    return (
        <div className="plans">
            <div className="plans-container">

                <div className="plans-header">Plans</div>

                <div className="plans-grid">

                    <div className="plans-grid-left">

                        <div className="cost-container">

                            <div className="cost-text-bold">$7,500 AUD/Month</div>
                            <div className="cost-text-normal">Pay monthly</div>

                        </div>

                        <div className="cost-container">

                            <div className="cost-text-bold">$6,500 AUD/Month</div>
                            <div className="cost-text-normal">Pay quarterly, save $1000</div>

                        </div>

                        <div className="plan-desc-container">

                            <div className="plan-desc-bold">Design Board</div>
                            <div className="plan-desc-normal">Unlimited revisions and designs for product & marketing</div>
                            <div className="plan-desc-bold">No Meetings</div>
                            <div className="plan-desc-normal">All project details are in Notion</div>

                            <div className="plans-button-wrapper">
                                <Button text="Get Started" width="200px"/>
                            </div>

                        </div>

                        <div className="plan-desc-container">

                            <div className="plan-desc-bold">Design Board</div>
                            <div className="plan-desc-normal">Unlimited revisions and designs for product & marketing</div>
                            <div className="plan-desc-bold">No Meetings</div>
                            <div className="plan-desc-normal">All project details are in Notion</div>

                            <div className="plans-button-wrapper">
                                <Button text="Get Started" width="200px"/>
                            </div>

                        </div>

                    </div>

                    <div className="plans-grid-right">
                        <img src={require("../../assets/plans-right-shapes.png")} alt="plans right shapes" id="plans-right-shapes"></img>
                        <img src={require("../../assets/consult-face.png")} alt="consult face" id="consult-face"></img>
                        <div className="consult-text">Chat design with us!</div>
                        <div className="plans-button-wrapper">
                            <Button text="Book Consultation" width="200px" bgColor="white" textColor="black"/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Plans