import './WeHelpWith.css'

const WeHelpWith = () => {
  return (
    <div className="we-help-with-container">

        <div className="we-help-with-heading-wrapper">
            <div className="we-help-with-heading">we help with</div>
        </div>
        <div className="we-help-with-rect-wrapper">
        
            <img src={require("../../assets/we-help-with-rectangle.png")} alt="we help with rectangle" id="we-help-with-rectangle"></img>
            <img src={require("../../assets/circle.png")} alt="circle" id="circle"></img>
            <img src={require("../../assets/middle-square.png")} alt="middle square" id="middle-square"></img>
            <img src={require("../../assets/middle-triangle.png")} alt="middle triangle" id="middle-triangle"></img>
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
  )
}

export default WeHelpWith