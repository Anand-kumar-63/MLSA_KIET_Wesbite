import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AiFillLinkedin } from "react-icons/ai";
import './Carousel.css';
import parse from "html-react-parser";
import { Motion } from "./framer-motion";// For Motion in Text

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3, // Show 3 slides on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-[#1F2937] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="text-center mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#0078D4] via-[#00A4EF] to-[#005A9E] bg-clip-text text-transparent">
          Our Chapter Leads
        </Motion.h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#0078D4] to-[#005A9E] rounded-full mx-auto mb-12"></div>
        
        <div className="carousel-container">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className="px-3 md:px-4">
                <div className="lead-card bg-[#2D3748] rounded-2xl relative overflow-hidden group border border-[#374151] hover:border-[#0078D4] transition-all duration-300 hover:shadow-xl hover:shadow-[#0078D4]/20">
                  <div className='lead-image-container h-64 bg-gradient-to-br from-[#0078D4]/20 to-[#005A9E]/20 flex justify-center items-center relative overflow-hidden'>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2D3748] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={d.img} 
                        alt={d.name} 
                        className="h-48 w-48 rounded-full object-cover border-4 border-[#0078D4]/30 group-hover:border-[#0078D4] transition-all duration-300 shadow-xl"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6 relative">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#0078D4] transition-colors duration-300">
                      {d.name}
                    </h3>
                    <div className="text-center text-gray-300 leading-relaxed text-sm sm:text-base min-h-[120px] flex items-center">
                      <p>{parse(d.review)}</p>
                    </div>
                    <a 
                      href={d.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className='lead-connect-button bg-gradient-to-r from-[#0078D4] to-[#005A9E] text-white text-base font-semibold px-6 py-2.5 rounded-lg flex items-center gap-2 mt-2 hover:from-[#005A9E] hover:to-[#0078D4] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#0078D4]/50'
                    >
                      <AiFillLinkedin size={20} /> Connect
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: 'Yash Kumar Goel',
    img: '/yashsir.JPG',
    review: '<b>Chapter Lead </b> with a vision to connect like-minded individuals under one hub. Yash is dedicated to fostering collaboration and creating a strong community that thrives on mutual support and shared goals.',
    linkedin: 'https://www.linkedin.com/in/yash-kumar-goel/'
  },
  {
    name: 'Ananya Srivastava',
    img: '/ananyamam.jpg',
    review: 'As <b> Chapter Administrator </b>, Ananya ensures smooth coordination of all events and activities. Her exceptional organizational skills and attention to detail help maintain a seamless flow, making every event a success.',
    linkedin: 'https://www.linkedin.com/in/ananyasri14/'
  },
  {
    name: 'Utkarsh Goyal',
    img: '/Utkarsh.jpg',
    review: '<b> Web Lead </b> responsible for creating and maintaining the club’s website. Utkarsh has enhanced accessibility and user experience through innovative web design and development.',
    linkedin: 'https://www.linkedin.com/in/utkarsh-goyal-74a81524b'
  },
  {
    name: 'Kanishka Sharma',
    img: '/Kanishka.jpg',
    review: ' <b> Web Co-Lead  </b> who played a pivotal role in the creation and development of our website. Kanishka’s contributions have been crucial in building a functional and user-friendly platform for our community.',
    linkedin: 'https://www.linkedin.com/in/kanishka-sharma-239235205'
  }
];


export default Carousel;
