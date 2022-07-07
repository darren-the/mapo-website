import './Features.css'
import squares from '../../assets/feature-squares.svg'
import heart from '../../assets/feature-heart.svg'
import video from '../../assets/feature-video.svg'

const Features = () => {
  return (
    <div className="features">
        <div className="features-empty-space"></div>
        <div className="features-container">

            <div className="features-header-wrapper">
                <div className="features-header-normal">Pay a fixed fee every month for </div>
                <div className="features-header-bold">unlimited designs & revisions </div>
                <div className="features-header-normal">to scale your business</div>
            </div>

            <div className="features-grid">

                <div className="feature-item">
                    <img src={squares} alt="squares" id="feature-img1" className="feature-img"></img>
                    <div className="feature-text" id="feature-text1">All your design needs in one</div>
                </div>

                <div className="feature-item">
                    <img src={heart} alt="heart" id="feature-img2" className="feature-img"></img>
                    <div className="feature-text" id="feature-text2">Revised until you love it</div>
                </div>

                <div className="feature-item">
                    <img src={video} alt="video" id="feature-img3" className="feature-img"></img>
                    <div className="feature-text" id="feature-text3">Completely async - no meetings</div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Features