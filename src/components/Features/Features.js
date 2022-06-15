import './Features.css'

const Features = () => {
  return (
    <div className="features-container">
        <div className="features-grid">

        <div className="feature-wrapper">
            <div className="feature-img-wrapper">
            <img src={require("../../assets/squares.png")} alt="squares" id="feature-img1"></img>
            </div>
            <div className="feature-text" id="feature-text1">All your design needs in one</div>
        </div>

        <div className="feature-wrapper">
            <div className="feature-img-wrapper">
                <img src={require("../../assets/heart.png")} alt="heart" id="feature-img2"></img>
            </div>
            <div className="feature-text" id="feature-text2">Unlimited revisions until you love it</div>
        </div>

        <div className="feature-wrapper">
            <div className="feature-img-wrapper">
            <div id="feature-img3">
                <img src={require("../../assets/video.png")} alt="video" className="feature-img" id="feature-img3-video"></img>
                <img src={require("../../assets/diagonal_line.png")} alt="diagonal line" id="feature-img3-line"></img>
            </div>
            </div>
            <div className="feature-text" id="feature-text3">Completely async - no meetings</div>
        </div>

        </div>
    </div>
  )
}

export default Features