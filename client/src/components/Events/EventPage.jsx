import { useEffect, useState } from "react";
import Mainfooter from "../footer/mainfooter.jsx";
import Event from "./events.jsx";
import EventDetailsPage from "../../pages/EventRedirect.jsx";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
const EventPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    //to check the login Status Using
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);
  const handleNavBack = () => {
    navigate("/events");
  };
  return (
    <>
      <nav className="bg-blue/40 backdrop-blur-md sticky top-0 z-50 border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <button
            onClick={handleNavBack}
            className="flex items-center gap-2 text-slate-100 hover:text-slate-900 transition-colors font-medium text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Events
          </button>
        </div>
      </nav>
      <Event isLoggedIn={isLoggedIn} />
      <Mainfooter />
    </>
  );
};
export default EventPage;
