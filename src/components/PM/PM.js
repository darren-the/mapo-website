import './PM.css'

import square from '../../assets/pm-shape-square.svg'
import circle from '../../assets/pm-shape-circle.svg'
import triangle from '../../assets/pm-shape-triangle.svg'
import leftShapes from '../../assets/pm-shape-left.svg'
import Button from '../Button/Button'

const PM = () => {
    return (
        <div className="pm">
            
            
            

            <img src={leftShapes} alt="pm left shapes" id="pm-left-shapes"></img>

            <div className="pm-container">

                <div className="pm-heading">Best in Class</div>
                
                <img src={circle} alt="pm circle" id="pm-circle"></img>
                <img src={square} alt="pm square" id="pm-square"></img>
                <img src={triangle} alt="pm triangle" id="pm-triangle"></img>
                
                <div className="pm-box">

                    <div className="pm-box-image"></div>

                    <div className="pm-box-grid">

                        <div className="pm-box-grid-item" id="pm-box-grid-item1">
                            <div className="pm-box-header">Product</div>
                            <ul className="pm-box-list">
                                <li className="pm-box-list-item">Websites</li>
                                <li className="pm-box-list-item">Mobile Applications</li>
                                <li className="pm-box-list-item">Web Applications</li>
                                <li className="pm-box-list-item">Design Systems</li>
                                <li className="pm-box-list-item">Wireframes</li>
                            </ul>
                        </div>

                        <div className="pm-box-grid-item">
                            <div className="pm-box-header">Marketing</div>
                            <ul className="pm-box-list">
                                <li className="pm-box-list-item">Social Media Graphics & Templates</li>
                                <li className="pm-box-list-item">Illustrations</li>
                                <li className="pm-box-list-item">Infographics</li>
                                <li className="pm-box-list-item">Slide Decks</li>
                                <li className="pm-box-list-item">1-Pagers</li>
                                <li className="pm-box-list-item">Marketing Collateral (e.g. banners, blog graphics, merch)</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

            <div className="pm-button-wrapper">
                <Button text="See Plans" width="283px"/>
            </div>

        </div>
    )
}

export default PM