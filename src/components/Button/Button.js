import './Button.css'

const Button = (props) => {
  return (
    <div className="btn-item" style={{
      width: props.width
    }}>

      <button onClick={props._onClick} className="btn-overlay"></button>

      <button className="btn-outline" style={{
        borderColor: props.bgColor,
      }}></button>  

      <div className="btn-fill" style={{
        color: props.textColor,
        backgroundColor: props.bgColor,
      }}>{props.text}</div>

    </div>
  )
}

Button.defaultProps = {
  link: "",
}

export default Button