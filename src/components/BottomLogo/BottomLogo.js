import './BottomLogo.css'
import logo from '../../assets/logo.svg'

const BottomLogo = () => {
  return (
    <div className="bottom-logo">
        <img src={logo} alt="bottom logo" id="bottom-logo-image"></img>
    </div>
  )
}

export default BottomLogo