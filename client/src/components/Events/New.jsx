"use client"
import { useState } from "react"
import { Calendar } from "lucide-react"
import "../joywin-cards/Card.css"
export default function Home() {
  const [activeTab, setActiveTab] = useState("all")
  const [expandedCard, setExpandedCard] = useState(null)
  const events = [
    {
      id: 1,
      title: "Bhasabandu - Cultural Night",
      category: "Cultural Event",
      description:
        "Join us for an evening celebrating our diverse cultural heritage. Bhasabandu brings together students from different backgrounds to share music, dance, and traditions. A wonderful opportunity to network and celebrate diversity.",
      date: "2024-12-15",
      time: "6:00 PM - 9:00 PM",
      location: "Main Auditorium",
      attendees: "250+ students",
      image: "/cultural-dance-performance-event.jpg",
      color: "bg-purple-50 border-purple-200",
    },
    {
      id: 2,
      title: "Microsoft Campus Visit",
      category: "Industry Experience",
      description:
        "Explore Microsoft's state-of-the-art campus and meet with industry professionals. Learn about career opportunities, latest technologies, and get insights into working at one of the world's leading tech companies.",
      date: "2024-11-20",
      time: "9:00 AM - 3:00 PM",
      location: "Microsoft Office, Tech Park",
      attendees: "120 students selected",
      image: "/modern-office-campus-building.jpg",
      color: "bg-blue-50 border-blue-200",
    },
    {
      id: 3,
      title: "Hackathon 2024",
      category: "Competition",
      description:
        "24-hour coding marathon where students build innovative solutions to real-world problems. Compete for prizes, showcase your skills, and collaborate with talented developers. All skill levels welcome.",
      date: "2024-10-05",
      time: "10:00 AM - 10:00 AM (next day)",
      location: "Innovation Hub, Building C",
      attendees: "300+ participants",
      image: "/hackathon-coding-competition-laptops.jpg",
      color: "bg-green-50 border-green-200",
    },
    {
      id: 4,
      title: "Speaker Sessions - Tech Leaders",
      category: "Workshop",
      description:
        "Learn from industry experts and thought leaders in technology. These interactive sessions cover emerging trends, career development, and insights from successful entrepreneurs and engineers.",
      date: "2024-09-12",
      time: "4:00 PM - 6:00 PM",
      location: "Conference Room A & B",
      attendees: "180+ attendees",
      image: "/conference-speaker-presentation-stage.jpg",
      color: "bg-amber-50 border-amber-200",
    },
  ]
  return (
    <div className="min-h-screen bg-[#1F2937]">
      <div className="bg-[#2D3748] border-b border-[#374151] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-white mb-2">Events</h1>
          <p className="text-gray-300">Discover and join upcoming campus events</p>
        </div>
      </div>
      <div className="bg-[#2D3748] border-b border-[#374151]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2">
            {[
              { id: "all", label: "All Events" },
              { id: "newest", label: "Newest Events" },
              { id: "latest", label: "Latest Event" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  activeTab === tab.id
                    ? "bg-[#0078D4] text-white"
                    : "bg-[#374151] text-gray-300 hover:bg-[#4B5563]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mx-auto px-4 lg:px-8">
          {events.map((event) => (
            <div
              key={event.id}
              className={`Card-content ${expandedCard === event.id ? 'expanded' : ''}`}
              onMouseEnter={() => setExpandedCard(event.id)}
              onMouseLeave={() => setExpandedCard(null)}
            >
              <div className="Card-title">
                <h3>{event.title}</h3>
              </div>
              <div className="Card-image">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                />
              </div>
              <div className="Card-footer">
                <div className="date-container">
                  <Calendar size={16} />
                  <h5>{event.date}</h5>
                </div>
              </div>
              {expandedCard === event.id && (
                <div className="Card-info">
                  <h3>{event.title}</h3>
                  <h5>
                    <Calendar size={20} />
                    {' '}
                    {event.date}
                  </h5>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
