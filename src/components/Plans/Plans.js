import './Plans.css'
import Button from '../Button/Button'

const Plans = () => {
    return (
        <div className="plans">
            <div className="plans-container">

                <div className="plans-header-container">
                    <div className="plans-header">Plans</div>
                    <div className="plans-book-container">
                        <div className="plans-book-text">Let's chat desgin!</div>
                        <Button text="Book Consultation" bgColor="#7D82FC" width="229px"/>
                    </div>
                </div>

                <div className="plans-grid">
                    
                    <div id="plan-item1" className="plan-item">
                        <div className="plan-item-cost-container plan-left-item-border">
                            <div className="plan-item-cost-header">$6,500 AUD / Month</div>
                            <div className="plan-item-cost-sub">Pay monthly</div>
                        </div>
                        <div className="plan-item-desc-container plan-left-item-border">
                            <div className="plan-item-desc-header">Design Board</div>
                            <div className="plan-item-desc-text">Queue as many new designs or revisions as you like, and they will be completed one-by-one.</div>
                            <div className="plan-item-button-wrapper">
                                <Button text="Get Started"/>
                            </div>
                        </div>
                    </div>

                    <div id="plan-item2" className="plan-item">

                        <div className="plan-item-best-value">Best Value</div>

                        <div className="plan-item-cost-container plan-value-item-border">
                            <div className="plan-item-cost-header">$5,500 AUD / Month</div>
                            <div className="plan-item-cost-sub">Pay quarterly, save $1,000</div>
                        </div>
                        <div className="plan-item-desc-container plan-value-item-border">
                            <div className="plan-item-desc-header">Design Board</div>
                            <div className="plan-item-desc-text">Queue as many new designs or revisions as you like, and they will be completed one-by-one.</div>
                            <div className="plan-item-button-wrapper">
                                <Button text="Get Started"/>
                            </div>
                        </div>
                        
                    </div>

                    <div id="plan-item3" className="plan-item">
                        <div className="plan-item-cost-container plan-right-item-border">
                            <div className="plan-item-cost-header">$130 AUD / Hour</div>
                            <div className="plan-item-cost-sub">Billed every 2 weeks</div>
                        </div>
                        <div className="plan-item-desc-container plan-right-item-border">
                            <div className="plan-item-desc-header">Design Board</div>
                            <div className="plan-item-desc-text">Queue as many new designs or revisions as you like, and they will be completed one-by-one.</div>
                            <div className="plan-item-button-wrapper">
                                <Button text="Get Started"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Plans