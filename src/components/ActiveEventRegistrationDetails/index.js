// Write your code here
import './index.css'

const registrationStatusObject={
  yetToRegister:'YET_TO_REGISTER',
  registered:'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails=props=>{
    const {status}=props

    const yetToRegisterView=()=>(
            <div className="register-container">
              <img className="yet-to-register-image" src="https://assets.ccbp.in/frontend/react-js/events-register-img.png" alt="yet to register"/>
              <p className="description">A live performance brings so much to your relationship with dance. Seeing dance live can often make you fall totally in love with this beautiful art form.</p>
              <button className="register-button" type="button">Register Here</button>
            </div>
        )

    const registeredView=()=>(
            <div className="register-container">
              <img className="registered-image" src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png" alt="registered"/>
              <h1 className="registered-text">You have already registered for the event</h1>
            </div>
        )

    const registrationsClosedView=()=>(
            <div className="register-container">
              <img className="registered-image" src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png" alt="registrations closed"/>
              <h1 className="registration-closed-head">Registrations Are Closed Now!</h1>
              <p className="description">Stay tuned. We will reopen the registrations soon!</p>
            </div>
        )

    const defaultView=()=>(
            <div className="default-container">
              <p className="default-text">Click on an event, to view its registration details</p>
            </div>
        )

    const renderOutput=()=>{
      switch (status){
        case registrationStatusObject.yetToRegister:
          return yetToRegisterView()
        case registrationStatusObject.registered:
          return registeredView()
        case registrationStatusObject.registrationsClosed:
          return registrationsClosedView()
        default:
          return defaultView()
    }
    }

    return(
      <div>{renderOutput()}</div>
    )

    
}

export default ActiveEventRegistrationDetails

