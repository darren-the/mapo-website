import './Experts.css'
import Button from '../Button/Button'

const Experts = () => {
  return (
    <div className="experts">

        <div className="experts-container">

            <div className="experts-heading-wrapper">
                <div className="experts-heading">Experts in...</div>
            </div>

            <div className="experts-rect-wrapper">
            
                <img src={require("../../assets/experts-rectangle.png")} alt="experts rectangle" id="experts-rectangle"></img>
                <img src={require("../../assets/experts-circle.png")} alt="experts circle" id="experts-circle"></img>
                <img src={require("../../assets/experts-square.png")} alt="experts square" id="experts-square"></img>
                <img src={require("../../assets/experts-triangle.png")} alt="experts triangle" id="experts-triangle"></img>
                <div className="product-marketing-container">

                    <div className="product-marketing-box-wrapper">
                        <div className="product-marketing-text-wrapper">
                            <div className="product-marketing-header">Product</div>
                            <ul className="product-marketing-list">
                                <li>Websites</li>
                                <li>Mobile Applications</li>
                                <li>Web Applications</li>
                                <li>Design Systems</li>
                                <li>Wireframes</li>
                            </ul>
                        </div>
                    </div>

                    <div className="product-marketing-box-wrapper">
                        <div className="product-marketing-text-wrapper">
                            <div className="product-marketing-header">Marketing</div>
                            <ul className="product-marketing-list">
                                <li>Social Media Graphics & Templates</li>
                                <li>Illustrations</li>
                                <li>Infographics</li>
                                <li>Slide Decks</li>
                                <li>1-Pagers</li>
                                <li>Marketing Collateral (e.g. banners, blog graphics, merch)</li>
                            </ul>
                        </div>
                    </div>

                </div>
        
            </div>

        </div>

        <div className="button-wrapper">
            <Button text="See Plans"/>
        </div>
        

        <img src={require("../../assets/experts-left-shapes.png")} alt="experts left shapes" id="experts-left-shapes"></img>

    </div>
  )
}

export default Experts