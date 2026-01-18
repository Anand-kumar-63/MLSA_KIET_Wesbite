import React from "react";
import { MdPeopleOutline } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { GiFist } from "react-icons/gi";
import Carousel from "../Carousel.jsx";
import Main_timeline from "../timeline/main_timeline.jsx";
import Mainfooter from "../footer/mainfooter.jsx";

import { Motion } from "../framer-motion"; // For Motion in Text

const AboutUs = () => {
  return (
    <>
      {/* About Section */}
      <section className="bg-[#1F2937] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="lg:flex lg:items-center lg:gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0078D4] via-[#00A4EF] to-[#005A9E] bg-clip-text text-transparent">
                  About Us
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#0078D4] to-[#005A9E] rounded-full mb-8"></div>
              </Motion.div>

              <Motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.2,
                }}
                className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4"
              >
                Microsoft Learn Student Ambassadors are passionate and tech-savvy individuals who promote digital literacy and tech skills in academic communities.
              </Motion.p>
              <Motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.3,
                }}
                className="text-lg sm:text-xl text-gray-300 leading-relaxed"
              >
                They bridge Microsoft and peers, advocating for technology adoption and fostering innovation through workshops, mentorship, and community engagement.
              </Motion.p>
            </div>

            {/* Image */}
            <Motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                delay: 0.4,
              }}
              className="lg:w-1/2 flex justify-center lg:justify-end"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0078D4] to-[#005A9E] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img
                  className="relative h-64 sm:h-80 lg:h-96 w-auto rounded-2xl shadow-2xl object-cover transform transition-transform duration-300 group-hover:scale-105"
                  src="group.png"
                  alt="MLSA Team"
                />
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#2D3748] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0078D4] to-[#005A9E] rounded-full mx-auto"></div>
          </Motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <Motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                delay: 0.1,
              }}
              className="bg-[#1F2937] rounded-xl p-8 hover:bg-[#374151] transition-all duration-300 group border border-[#374151] hover:border-[#0078D4] hover:shadow-xl hover:shadow-[#0078D4]/20"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-[#0078D4] to-[#005A9E] p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <MdPeopleOutline className="text-white" size={48} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Empowerment</h3>
              <p className="text-gray-300 leading-relaxed text-center">
                Our primary objective is to empower students with the tools and knowledge needed to thrive in the digital age by championing Microsoft technologies.
              </p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
              className="bg-[#1F2937] rounded-xl p-8 hover:bg-[#374151] transition-all duration-300 group border border-[#374151] hover:border-[#0078D4] hover:shadow-xl hover:shadow-[#0078D4]/20"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-[#0078D4] to-[#005A9E] p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <GiTeacher className="text-white" size={48} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Innovation</h3>
              <p className="text-gray-300 leading-relaxed text-center">
                At the heart of our mission is the cultivation of innovation and collaboration. We create a community where students can exchange ideas, solve problems, and unleash their creativity.
              </p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                delay: 0.3,
              }}
              className="bg-[#1F2937] rounded-xl p-8 hover:bg-[#374151] transition-all duration-300 group border border-[#374151] hover:border-[#0078D4] hover:shadow-xl hover:shadow-[#0078D4]/20"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-[#0078D4] to-[#005A9E] p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <GiFist className="text-white" size={48} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Connection</h3>
              <p className="text-gray-300 leading-relaxed text-center">
                We bridge the gap between the classroom and the real world, providing students with practical experiences, industry insights, and networking opportunities.
              </p>
            </Motion.div>
          </div>
        </div>
      </section>

      <Main_timeline />

      <Carousel />
      
      <section className="bg-[#1F2937]">
        <Mainfooter />
      </section>
    </>
  );
};

export default AboutUs;
