import './GetStarted.css'
import { useNavigate, useLocation } from "react-router-dom"
import logo from '../../assets/logo.svg'
import Button from '../Button/Button'
import rightImage from '../../assets/getstarted-right-image.svg'
import useScrollToTop from '../../utils/useScrollToTop'
import { audrey } from '../../keys'
import axios from 'axios'
import { useState, useRef, createRef } from 'react'

const GetStarted = () => {

  useScrollToTop()

  const textLabels = [
    'Company Name',
    'Company Description',
    'Contact Name',
    'Email Address'
  ]
  const checkboxLabels = [
    'Landing Page',
    'Design Systems',
    'Web/Mobile Apps',
    'Marketing Assets',
    'Branding',
    'Other'
  ]
  const [values, setValues] = useState(
    textLabels.reduce((obj, textLabel) => ({...obj, [textLabel]: ''}), {})
  )
  const emailBoxRef = useRef()
  const emailMsgRef = useRef()
  const submitErrorRef = useRef()
  const reqRefs = useRef({})
  textLabels.map(textLabel => (reqRefs.current[textLabel] = reqRefs.current[textLabel] ?? createRef()))
  var isValidFields = true
  const location = useLocation()

  const useTrello = () => {
    // const URL1 = `https://api.trello.com/1/members/me/boards?key=${audrey.key}&token=${audrey.token}`
    // axios.get(URL1).then((response) => {
    //     console.log(response.data)
    // })

    // Check fields are not empty
    for (const item in reqRefs.current) {
      if (values[item] === '') {
        reqRefs.current[item].current.style.display = "inline-block"
        isValidFields = false
      } else {
        reqRefs.current[item].current.style.display = "none"
        if (item === 'Email Address') {
          // Check email validity
          const isEmailValid = values['Email Address'].toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
          if (!isEmailValid) {
            emailMsgRef.current.style.display = "inline-block"
            isValidFields = false
          } else {
            emailMsgRef.current.style.display = "none"
          }
        }
      }
    }
    if (!isValidFields) return
    
    // Create board post request
    // const workflowID = '61aca4ad425d517d00748b5b'
    const hourlyBoardID = '62cb66b16645d1039a2347e6'
    const monthlyBoardID = '62ca8e9a4ce2e4122c27d8fa'
    const name = values['Company Name']
    const idBoardSource = (location.state.plan === '3') ? hourlyBoardID : monthlyBoardID
    const baseURL = `https://api.trello.com/1/boards/?name=${name}&key=${audrey.key}&token=${audrey.token}&idBoardSource=${idBoardSource}`
    axios.post(baseURL).then((response) => {
        console.log(response.status)
        submitErrorRef.current.style.display = "none"
    }).catch((error) => {
        console.log(error.toJSON())
        submitErrorRef.current.style.display = "inline-block"
    })
  }
  
  // Initialising text input items
  const textItems = textLabels.map(x => {
    const name = x.replace(" ", "-").toLowerCase().replace("/", "-")
    const handleInputChange = (event) => {
      setValues((values) => ({
        ...values,
        [x]: event.target.value,
      }))
    }
    const emailMsg = (x === 'Email Address') 
      ? <div className="getstarted-form-text-error" ref={emailMsgRef} style={{display: 'none'}}>Invalid email address</div>
      : <></>
    return (
      <div key={name} className="getstarted-form-text-item">
        <label htmlFor={name} className="getstarted-form-text-label">{x}</label>
        <input 
          ref={(x === 'Email Address') ? emailBoxRef : null}
          type="input"
          className="getstarted-form-text-input"
          name={name}
          value={values[x]}
          onChange={handleInputChange}/>
        <div className="getstarted-form-text-error" ref={reqRefs.current[x]} style={{display: 'none'}}>This field is required</div>
        {emailMsg}
      </div>
    )
  })

  // Initialising checkbox input items
  const checkboxItems = checkboxLabels.map(x => {
    const name = x.replace(" ", "-").toLowerCase().replace("/", "-")
    return (
      <div key={name} className="getstarted-form-checkbox-item">
        <input type="checkbox" className="getstarted-form-checkbox-input" name={name}/>
        <label htmlFor={name} className="getstarted-form-checkbox-label">{x}</label>
      </div>
    )
  })

  const handleSubmit = (event) => {
    if (!isValidFields) event.preventDefault()
  }

  const navigate = useNavigate()
  const backButtonClick = () =>  {
    navigate('/', {
      state: {
        scrollToPlans: true
      }
    })
  }

  return (
    <div className="getstarted">
        <div className="getstarted-container">

          <div className="getstarted-top">
            <img src={logo} width="96" alt="getstarted logo" id="getstarted-logo"/>
            <div className="getstarted-top-back-wrapper">
              <button onClick={backButtonClick} className="getstarted-top-back">Back</button>
            </div>
          </div>

          <div className="getstarted-bottom">

            <form className="getstarted-form" onSubmit={handleSubmit}>
              <div className="heading2 getstarted-form-header">Queue your 1st design in minutes</div>
              <div className="getstarted-form-text-container">{textItems}</div>
              <div className="getstarted-form-checkbox-header">What design services do you need? Select as many as you like.</div>
              <div className="getstarted-form-checkbox-container">{checkboxItems}</div>
              <div className="getstarted-form-button-wrapper">
                <Button text="Open Trello" width="100%" _onClick={useTrello}/>
              </div>
              <div className="getstarted-form-text-error" ref={submitErrorRef} style={{display: 'none'}}>There was an error submitting the form</div>
            </form>
            
            <img src={rightImage} alt="getstarted right bg" id="getstarted-right-bg" />

          </div>
          
        </div>
        
    </div>
  )
}

export default GetStarted