// Write your code here
import './index.css'

const EventItem = props =>{
    const {eventDetails,setRegistration,isActive}=props
    const {id,imageUrl,name,location}=eventDetails
    const imageActive=isActive?'image-active':''

    const setRegistrationStatus=()=>{
      setRegistration(id)
    }

    return(
        <li className="event-item-main-container">
            <button type="button" onClick={setRegistrationStatus}>
              <img className={`event-image ${imageActive}`} src={imageUrl} alt="event"/>
            </button>
            <p className="event-name">{name}</p>
            <p className="event-location">{location}</p>
        </li>
    )
}

export default EventItem
