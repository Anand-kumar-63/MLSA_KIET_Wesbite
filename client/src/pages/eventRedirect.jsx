import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Award,
  CheckCircle,
  Share2,
  ChevronLeft,
  Info,
  UserCheck,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
const EVENTS_DATA = [
  {
    _id: "dummy-1",
    eventName: "Azure Fundamentals Workshop",
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    eventInfo:
      "Learn the fundamentals of Microsoft Azure cloud computing platform. Perfect for beginners! We will cover resources, VMs, and basic networking.",
    isRegistered: false,
    location: "Main Auditorium, Block A",
    time: "10:00 AM - 02:00 PM",
    organizers: [
      {
        name: "Sarah Jenkins",
        role: "Cloud Lead",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      },
      {
        name: "David Chen",
        role: "Tech Co-Lead",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      },
    ],
    judges: [
      {
        name: "Dr. A. Sharma",
        role: "HOD CSE",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sharma",
      },
    ],
    eligibility: ["1st Year", "2nd Year", "3rd Year"],
  },
  {
    _id: "dummy-2",
    eventName: "Power Platform Hackathon",
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    eventInfo:
      "Build innovative solutions using Power Apps, Power Automate, and Power BI. Compete for prizes!",
    isRegistered: true,
    location: "Innovation Hub",
    time: "09:00 AM - 05:00 PM",
    organizers: [
      {
        name: "Dev Club",
        role: "Tech Team",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev",
      },
    ],
    judges: [
      {
        name: "Mr. R. Verma",
        role: "Industry Expert",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Verma",
      },
      {
        name: "Ms. K. Singh",
        role: "Alumni",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Singh",
      },
    ],
    eligibility: ["2nd Year", "3rd Year", "4th Year"],
  },
  {
    _id: "dummy-3",
    eventName: "GitHub Copilot & AI Coding",
    date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    eventInfo:
      "Explore AI-powered coding with GitHub Copilot. Hands-on session with real-world examples.",
    isRegistered: false,
    location: "Lab Complex 3",
    time: "11:00 AM - 01:00 PM",
    organizers: [
      {
        name: "AI Society",
        role: "Organizer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AI",
      },
    ],
    judges: [],
    eligibility: ["All Years"],
  },
  {
    _id: "dummy-4",
    eventName: "Microsoft 365 Developer Day",
    date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    eventInfo:
      "Deep dive into Microsoft 365 development. Learn about Teams apps, SharePoint, and more.",
    isRegistered: false,
    location: "Seminar Hall B",
    time: "10:00 AM - 04:00 PM",
    organizers: [
      {
        name: "MS Student Partner",
        role: "Lead",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MSP",
      },
    ],
    judges: [
      {
        name: "Prof. Gupta",
        role: "Dean Academics",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gupta",
      },
    ],
    eligibility: ["3rd Year", "4th Year"],
  },
  {
    _id: "dummy-5",
    eventName: "AI & Machine Learning Bootcamp",
    date: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(), // 45 days from now
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
    eventInfo:
      "Comprehensive bootcamp on AI and ML using Azure Machine Learning. From basics to advanced concepts.",
    isRegistered: false,
    location: "Virtual (Teams)",
    time: "05:00 PM - 08:00 PM",
    organizers: [
      {
        name: "Code Cell",
        role: "Tech Body",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Code",
      },
    ],
    judges: [],
    eligibility: ["1st Year", "2nd Year"],
  },
  {
    _id: "dummy-6",
    eventName: "DevOps with Azure DevOps",
    date: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(), // 60 days from now
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    eventInfo:
      "Master CI/CD pipelines, containerization, and infrastructure as code with Azure DevOps.",
    isRegistered: false,
    location: "Computer Centre",
    time: "09:00 AM - 12:00 PM",
    organizers: [
      {
        name: "System Admins",
        role: "Infra Team",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sys",
      },
    ],
    judges: [
      {
        name: "Mr. K. Lee",
        role: "DevOps Engineer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lee",
      },
    ],
    eligibility: ["3rd Year", "4th Year"],
  },
];
const Badge = ({ children, className }) => (
  <span
    className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${className}`}
  >
    {children}
  </span>
);
const SectionTitle = ({ icon: Icon, title }) => (
  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
    <div className="p-1.5 bg-blue-50 rounded-lg text-blue-600">
      <Icon className="w-5 h-5" />
    </div>
    {title}
  </h3>
);
const PersonCard = ({ person, type = "organizer" }) => (
  <div
    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border ${
      type === "judge"
        ? "bg-amber-50/50 border-amber-100 hover:shadow-md hover:shadow-amber-100"
        : "bg-white border-slate-100 hover:shadow-md hover:shadow-slate-100"
    }`}
  >
    <img
      src={person.avatar}
      alt={person.name}
      className={`w-12 h-12 rounded-full border-2 shadow-sm ${type === "judge" ? "border-amber-200" : "border-white"}`}
    />
    <div>
      <p className="font-bold text-slate-900 leading-tight">{person.name}</p>
      <p
        className={`text-xs font-medium ${type === "judge" ? "text-amber-700" : "text-slate-500"}`}
      >
        {person.role}
      </p>
    </div>
  </div>
);
const EventDetailsPage = ({}) => {
  const { evId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    // Simulate API fetch delay
    setLoading(true);
    setTimeout(() => {
      const foundEvent = EVENTS_DATA.find((e) => e._id === evId);
      setEvent(foundEvent);
      setLoading(false);
    }, 400);
  }, [evId]);
  const handleNavBack = () => {
    navigate("/events");
  };
  const formatDate = (isoString) => {
    if (!isoString) return "";
    return new Date(isoString).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-slate-400">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
          <div className="h-4 w-32 bg-slate-200 rounded"></div>
        </div>
      </div>
    );
  }
  if (!event) return <div>Event not found</div>;
  return (
    <div className="min-h-screen font-sans text-slate-800 pb-12">
      <nav className="bg-[#1F2937]/80 backdrop-blur-md sticky top-0 z-50 border-b border-[#181e26]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <button
            onClick={handleNavBack}
            className="flex items-center gap-2 text-slate-200 hover:text-slate-200 transition-colors font-medium text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Events
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-sm shadow-slate-500 group">
              <img
                src={event.image}
                alt={event.eventName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-full">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-blue-500/90 text-white backdrop-blur-sm">
                    Upcoming
                  </Badge>
                  {event.isRegistered && (
                    <Badge className="bg-green-500/90 text-white backdrop-blur-sm flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Registered
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-2 text-shadow-sm">
                  {event.eventName}
                </h1>
                <div className="flex items-center gap-2 text-slate-200 text-sm md:text-base">
                  <MapPin className="w-4 h-4" /> {event.location}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-100">
              <SectionTitle icon={Info} title="Event Details" />
              <p className="text-slate-600 leading-relaxed text-lg">
                {event.eventInfo}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <SectionTitle icon={Users} title="Organizers" />
                <div className="space-y-3">
                  {event.organizers && event.organizers.length > 0 ? (
                    event.organizers.map((org, i) => (
                      <PersonCard key={i} person={org} type="organizer" />
                    ))
                  ) : (
                    <p className="text-slate-400 text-sm italic">TBA</p>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <SectionTitle icon={Award} title="Judges & Dignitaries" />
                <div className="space-y-3">
                  {event.judges && event.judges.length > 0 ? (
                    event.judges.map((judge, i) => (
                      <PersonCard key={i} person={judge} type="judge" />
                    ))
                  ) : (
                    <p className="text-slate-400 text-sm italic">
                      To be announced soon.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* DATE & TIME CARD */}
            <div className="bg-white rounded-xl p-6 shadow-xl shadow-slate-600/60 border border-slate-400">
              <h3 className="text-lg font-bold text-slate-800 mb-6">
                Schedule
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Date
                    </p>
                    <p className="font-semibold text-slate-800 text-lg">
                      {formatDate(event.date)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-50 text-pink-600 rounded-2xl">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Time
                    </p>
                    <p className="font-semibold text-slate-800 text-lg">
                      {event.time}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-slate-500" /> Eligibility
                </h4>
                <div className="flex flex-wrap gap-2">
                  {event.eligibility &&
                    event.eligibility.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Ready to join?</h3>
                <p className="text-slate-400 text-sm mb-6">
                  {event.isRegistered
                    ? "You are all set! Check your email for the entry pass."
                    : "Spots are filling up fast. Register now to secure your seat."}
                </p>

                {event.isRegistered ? (
                  <button
                    disabled
                    className="w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all cursor-default"
                  >
                    <CheckCircle className="w-5 h-5" /> Registered
                  </button>
                ) : (
                  <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-900/50 hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2 group">
                    Register Now
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                )}

                {!event.isRegistered && (
                  <p className="text-center text-xs text-slate-500 mt-4">
                    Registration closes 24h before event starts.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetailsPage;
