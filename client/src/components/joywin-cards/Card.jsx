import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faL } from '@fortawesome/free-solid-svg-icons';
import { useState,useContext } from 'react';
import { MainContext } from '../../Context/MainContext';
import { useNavigate } from 'react-router-dom';

import './Card.css';



const EventCards = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleCardHover = () => {
    setIsExpanded(true);
  };

  const handleCardLeave = () => {
    setIsExpanded(false);
  };

  const handleCardClick = () => {
    const isUpcoming = props.isUpcoming || false; 
    const path = isUpcoming ? `/upcoming-event-info/${props._id}` : `/event-info/${props.id}`;
    navigate(path);
  };

  return (
    <div
      className={`Card-content ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
      onClick={handleCardClick}
    >
      <div className="Card-title">
        <h3>{props.eventName}</h3>
      </div>
      <div className="Card-image">
        <img src={props.image} alt="Event" />
      </div>
      <div className="Card-footer">
        <div className="date-container">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <h5>{props.date.split('T')[0]}</h5>
        </div>
      </div>
      {isExpanded && (
        <div className="Card-info">
          <h3>{props.eventName}</h3>
          <h5>
            <FontAwesomeIcon icon={faCalendarAlt} />{' '}
            {props.date.split('T')[0]}
          </h5>
        </div>
      )}
    </div>
  );
};

const UpComingEventCards = (props) => {
  const { showRegister, setShowRegister } = useContext(MainContext);
  const { eventName, setEventName } = useContext(MainContext);
  const { eventImage, setEventImage } = useContext(MainContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  console.log(props);
  const handleCardHover = () => {
    setIsExpanded(true);
  };

  const handleCardLeave = () => {
    setIsExpanded(false);
  };

  const handleCardClick = () => {
    const path = `/upcoming-event-info/${props.id}`;
    navigate(path);
  };

  const handleRegister = (e) => {
    e.stopPropagation(); // Prevent card click when clicking button
    const token = localStorage.getItem('token');
    if (token) {
      if (props.isRegistered) {  
        const path = `/upcoming-event-info/${props._id}`;
        navigate(path);
      } else {
        setEventName(props.eventName);
        setEventImage(props.image);
        setShowRegister(true);
        
        const path = `/upcoming-event-info/${props._id}`;
        navigate(path);
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <div
      className={`Card-content ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
      onClick={handleCardClick}
    >
      <div className="Card-title">
        <h3>{props.eventName}</h3>
      </div>
      <div className="Card-image">
        <img src={props.image} alt="Event" />
      </div>
      <div className="Card-footer">
        <div className="date-container">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <h5>{props.date.split('T')[0]}</h5>
        </div>
      </div>
      {isExpanded && (
        <div className="Card-info">
          <h3>{props.eventName}</h3>
          <h5>
            <FontAwesomeIcon icon={faCalendarAlt} />{' '}
            {props.date.split('T')[0]}
          </h5>
          <button onClick={handleRegister}>
            {props.isRegistered ? 'Already Registered' : 'Register Now'}
          </button>
        </div>
      )}
    </div>
  );
};



export { EventCards, UpComingEventCards };


