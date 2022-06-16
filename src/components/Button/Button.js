import './Button.css'

const Button = (props) => {
  return (
    <div className="btn-item" style={{
            top: props.top,
            bottom: props.bottom,
            right: props.right,
            left: props.left,
        }}>
        <button className="btn-text" style={{
          color: props.textColor,
          width: props.width
        }}>{props.text}</button>  
        <div className="btn-bg" style={{
          backgroundColor: props.bgColor,
          width: props.width
        }}></div>
    </div>
  )
}

export default Button