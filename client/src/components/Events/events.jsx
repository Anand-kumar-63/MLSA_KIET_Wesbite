import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../Context/MainContext.jsx";
import { EventCards, UpComingEventCards } from "../joywin-cards/Card.jsx";
import Loading from "../Loading/Loading.jsx";
import styled from 'styled-components';
import Eventnew from './Eventnew';
import EventDetailsPage from "../../pages/EventRedirect.jsx";

const PlaceholderImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; 
  width: 100%;
  max-height: 500px;  /* You can adjust this as needed */
  overflow: hidden;  /* This ensures that the image doesn't overflow the container */
`;
const Event = ({ isLoggedIn }) => {
  const { newEvents, setNewEvents } = useContext(MainContext);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState({ upcoming: [], past: [] });
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const navigate = useNavigate();

  // Dummy upcoming events data
  const dummyUpcomingEvents = [
    {
      _id: 'dummy-1',
      eventName: 'Azure Fundamentals Workshop',
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
      eventInfo: 'Learn the fundamentals of Microsoft Azure cloud computing platform. Perfect for beginners!',
      isRegisteres: false
    },
    {
      _id: 'dummy-2',
      eventName: 'Power Platform Hackathon',
      date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days from now
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      eventInfo: 'Build innovative solutions using Power Apps, Power Automate, and Power BI. Compete for prizes!',
      isRegisteres: false
    },
    {
      _id: 'dummy-3',
      eventName: 'GitHub Copilot & AI Coding',
      date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(), // 21 days from now
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      eventInfo: 'Explore AI-powered coding with GitHub Copilot. Hands-on session with real-world examples.',
      isRegisteres: false
    },
    {
      _id: 'dummy-4',
      eventName: 'Microsoft 365 Developer Day',
      date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      eventInfo: 'Deep dive into Microsoft 365 development. Learn about Teams apps, SharePoint, and more.',
      isRegisteres: false
    },
    {
      _id: 'dummy-5',
      eventName: 'AI & Machine Learning Bootcamp',
      date: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(), // 45 days from now
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop',
      eventInfo: 'Comprehensive bootcamp on AI and ML using Azure Machine Learning. From basics to advanced concepts.',
      isRegisteres: false
    },
    {
      _id: 'dummy-6',
      eventName: 'DevOps with Azure DevOps',
      date: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(), // 60 days from now
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      eventInfo: 'Master CI/CD pipelines, containerization, and infrastructure as code with Azure DevOps.',
      isRegisteres: false
    }
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const [upcomingResponse, pastResponse] = await Promise.all([
          axios.get("https://mlsa-backend-4w03.onrender.com/api/event/allEventsupcoming"),
          axios.get("https://mlsa-backend-4w03.onrender.com/api/event/allEventspast")
        ]);
        const upcomingEvents = upcomingResponse.data.data || [];
        const pastEvents = pastResponse.data.data || [];
        
        // Use dummy events only if no upcoming events exist from API
        const allUpcomingEvents = upcomingEvents.length > 0 
          ? upcomingEvents 
          : dummyUpcomingEvents;
        
        setNewEvents(allUpcomingEvents);
        setEvents({ upcoming: allUpcomingEvents, past: pastEvents });
        setShowPlaceholder(allUpcomingEvents.length === 0);

      } catch (error) {
        console.error("Error fetching events:",error);
        // Use dummy events if API fails
        setEvents({ upcoming: dummyUpcomingEvents, past: [] });
        setShowPlaceholder(false);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [setNewEvents]);

  const toggleZoom = () => setZoomed(!zoomed);

  return (
    <div className="container mx-auto py-2 bg-[#1F2937] min-h-screen">
      {isLoggedIn ? (
        <Eventnew />
      ) : (
        <>
          <Section title="Upcoming Events">
            {loading ? (
              <Loading />
            ) : showPlaceholder ? (
              <ImageContainer>
                <PlaceholderImage
                  src="/roadmap.jpeg"
                  alt="No Upcoming Events"
                  onClick={toggleZoom}
                  style={{ transform: zoomed ? 'scale(1.5)' : 'scale(1)' }}
                />
              </ImageContainer>
            ) : (
              events.upcoming.map((event) => (
                <UpComingEventCards
                  key={event._id}
                  id={event._id}
                  isRegistered={event.isRegisteres}
                  eventName={event.eventName}
                  date={event.date}
                  eventInfo={event.eventInfo}
                  image={event.image}
                  isLoggedIn={isLoggedIn}
                  navigate={navigate}
                />
              ))
            )}
          </Section>
          <Section title="Past Events">
            {loading ? (
              <Loading />
            ) : Array.isArray(events.past) && events.past.length > 0 ? (
              events.past.map((event) => (
                <EventCards
                  key={event._id}
                  id={event._id}
                  eventName={event.eventName}
                  date={event.date}
                  eventInfo={event.eventInfo}
                  image={event.image}
                />
              ))
            ) : (
              <div className="h-full w-screen flex justify-center items-center py-12">
                <div className="text-center">
                  <h1 className="text-white font-extrabold text-5xl mb-4">No Past Events Available</h1>
                  <p className="text-gray-400 text-lg">Check back later for past event highlights.</p>
                </div>
              </div>
            )}
          </Section>
        </>
      )}
    </div>
  );
};

const Section = ({ title, children }) => (
  <>
    <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 mb-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 m-auto bg-gradient-to-l from-[#0078D4] from-1% to-[#005A9E] to-70% bg-clip-text text-transparent">
        {title}
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-[#0078D4] to-[#005A9E] mx-auto rounded-full"></div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mx-auto px-4 lg:px-8">
      {children}
    </div>
  </>
);

export default Event;
