import './Button.css'

const Button = (props) => {
  return (
    <div className="btn-item" style={{
      width: props.width
    }}>

      <button className="btn-outline" style={{
        backgroundColor: props.bgColor,
      }}></button>  

      <div className="btn-fill" style={{
        color: props.textColor,
        backgroundColor: props.bgColor,
      }}>{props.text}</div>

    </div>
  )
}

export default Button