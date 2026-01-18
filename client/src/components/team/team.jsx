import React, { useEffect, useState } from 'react';
import { AiFillLinkedin, AiFillMail, AiOutlineUser } from 'react-icons/ai';
import './team.css';
import Mainfooter from '../footer/mainfooter';

const MemberCard = ({ member }) => {
  // Extract position from domain (e.g., "Web Lead" from "Web Lead Domain")
  const getPosition = (domain) => {
    if (!domain) return 'Member';
    const domainLower = domain.toLowerCase();
    if (domainLower.includes('lead')) return 'Lead';
    if (domainLower.includes('colead')) return 'Co-Lead';
    if (domainLower.includes('manager')) return 'Manager';
    if (domainLower.includes('coordinator')) return 'Coordinator';
    return domain.split(' ')[0] || 'Member';
  };

  // Generate description based on domain/position
  const getDescription = (domain, name) => {
    const domainLower = domain?.toLowerCase() || '';
    if (domainLower.includes('web')) {
      return `Passionate web developer and ${getPosition(domain).toLowerCase()} specializing in modern web technologies and frameworks.`;
    } else if (domainLower.includes('android')) {
      return `Mobile app developer and ${getPosition(domain).toLowerCase()} focused on creating innovative Android applications.`;
    } else if (domainLower.includes('event')) {
      return `Event management ${getPosition(domain).toLowerCase()} with expertise in organizing and coordinating tech events.`;
    } else if (domainLower.includes('graphic')) {
      return `Creative designer and ${getPosition(domain).toLowerCase()} bringing visual excellence to MLSA initiatives.`;
    } else if (domainLower.includes('sponsor')) {
      return `Partnership ${getPosition(domain).toLowerCase()} building strategic relationships and securing sponsorships.`;
    } else if (domainLower.includes('chapter')) {
      return `Chapter ${getPosition(domain).toLowerCase()} leading community initiatives and fostering growth.`;
    }
    return `Dedicated MLSA member contributing to the community's success and growth.`;
  };

  // Generate email from name (placeholder format)
  const getEmail = (name, domain) => {
    if (member.email) return member.email;
    const nameLower = name?.toLowerCase().replace(/\s+/g, '.') || 'member';
    const domainPart = domain?.toLowerCase().split(' ')[0] || 'mlsa';
    return `${nameLower}@${domainPart}.kiet.edu`;
  };

  const position = getPosition(member.domain);
  const description = member.description || getDescription(member.domain, member.name);
  const email = getEmail(member.name, member.domain);

  return (
    <div className="member-card-wrapper">
      <div className="member-card">
        <div className="member-image-container">
          <img
            src={member.profileImage}
            alt={member.name}
            className="member-image"
          />
        </div>
        <div className="member-content">
          <h3 className="member-name">{member.name}</h3>
          <p className="member-position">{position}</p>
          <p className="member-domain">{member.domain}</p>
          <p className="member-description">{description}</p>
          <div className="member-social">
            {member.linkedlnIdId && (
              <a 
                href={member.linkedlnIdId} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin-link"
                aria-label="LinkedIn Profile"
              >
                <AiFillLinkedin />
                <span>LinkedIn</span>
              </a>
            )}
            <a 
              href={`mailto:${email}`}
              className="social-link email-link"
              aria-label="Email"
            >
              <AiFillMail />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FacultyCard = ({ member }) => {
  return (
    <div className="faculty-card">
      <img
        src={member.image}
        alt={member.name}
      />
      <h2>{member.name}</h2>
      <p className="faculty-role">{member.role}</p>
      <a href={member.aboutLink} target="_blank" rel="noopener noreferrer" className="faculty-link">
        <AiOutlineUser />
        <span>View Profile</span>
      </a>
    </div>
  );
};

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch('https://mlsa-backend-4w03.onrender.com/api/member/Allmembers')
      .then((response) => response.json())
      .then((data) => setTeamMembers(data))
      .catch((error) => console.error('Error fetching team members:', error));
  }, []);

  const facultyMembers = [
    {
      name: 'Dr Vineet Kumar Sharma',
      role: 'Chief Patron',
      image: 'HOD.jpg',
      aboutLink: 'https://www.kiet.edu/home/department_wise_faculty_detail/NQ==/Nw==',
    },
    {
      name: 'Dr Seema Maitrey',
      role: 'Faculty Coordinator',
      image: 'mam.jpg',
      aboutLink: 'https://www.kiet.edu/home/department_wise_faculty_detail/NQ==/MjA1',
    },
  ];

  // Group members by keywords
  const groupMembersByKeyword = (members) => {
    const groups = {
      'Chapter': [],
      'Web': [],
      'Android': [],
      'Event': [],
      'Sponsor': [],
      'Graphic': [],
      'Other': []
    };

    members.forEach(member => {
      const domain = member.domain.toLowerCase();
      if (domain.includes('chapter')) {
        groups['Chapter'].push(member);
      } else if (domain.includes('web')) {
        groups['Web'].push(member);
      } else if (domain.includes('android')) {
        groups['Android'].push(member);
      } else if (domain.includes('event')) {
        groups['Event'].push(member);
      } else if (domain.includes('sponsor')) {
        groups['Sponsor'].push(member);
      } else if (domain.includes('graphic')) {
        groups['Graphic'].push(member);
      } else {
        groups['Other'].push(member);
      }
    });

    return groups;
  };

 
  const sortMembersByPriority = (members) => {
    const priorityOrder = ['lead', 'colead', 'manager', 'coordinator', ''];
    
    return members.sort((a, b) => {
      const domainA = a.domain.toLowerCase();
      const domainB = b.domain.toLowerCase();
      
      const priorityA = priorityOrder.findIndex(p => domainA.includes(p));
      const priorityB = priorityOrder.findIndex(p => domainB.includes(p));
      
      return priorityA - priorityB;
    });
  };

  const groupedAndSortedMembers = groupMembersByKeyword(teamMembers);
  Object.keys(groupedAndSortedMembers).forEach(key => {
    groupedAndSortedMembers[key] = sortMembersByPriority(groupedAndSortedMembers[key]);
  });

  return (
    <div className="bg-[#1F2937] min-h-screen">
      <div className="container mx-auto mb-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-[#0078D4] to-[#005A9E] bg-clip-text text-transparent">
            Faculty Coordinators
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0078D4] to-[#005A9E] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20 max-w-5xl mx-auto">
          {facultyMembers.map((member, index) => (
            <FacultyCard key={index} member={member} />
          ))}
        </div>

        <div className="text-center mt-16 mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-[#0078D4] to-[#005A9E] bg-clip-text text-transparent">
            Our Team
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0078D4] to-[#005A9E] mx-auto rounded-full"></div>
        </div>

        {Object.entries(groupedAndSortedMembers).map(([group, members]) => {
          if (members.length === 0) return null;

          return (
            <div key={group} className="mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-white">
                {group}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                {members.map((member, index) => (
                  <MemberCard key={member._id || index} member={member} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <Mainfooter className="mt-5" />
    </div>
  );
};

export default TeamPage;

