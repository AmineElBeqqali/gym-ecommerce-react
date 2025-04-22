import React from "react";
import AboutUsImage from "../img/aboutus_pic.jpg"; // Replace with your actual image file name

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-[#1e1e1e] text-white py-40"> {/* Dark gray background */}
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          {/* Text Section */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                {/* Section Heading */}
                <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                  About Us
                </h6>
                {/* Title and Description */}
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-indigo-400 text-4xl font-bold leading-normal lg:text-start text-center">
                  The Journey to Fitness Excellence
                  </h2>
                  <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                  At our gym, we believe in building a foundation of strength, health, and confidence. Whether you're lifting for the first time or striving to reach new heights, we're here to guide you every step of the way. With state-of-the-art equipment, expert trainers, and a supportive community, our mission is to empower you to achieve your fitness goals and embrace a healthier lifestyle. Together, we push limits, break barriers, and celebrate every victory, big or small.                  </p>
                </div>
              </div>
              {/* Stats Section */}
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  {/* Stat Card 1 */}
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-500 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-white text-2xl font-bold leading-9">10+ Years</h4>
                    <p className="text-gray-300 text-base font-normal leading-relaxed">
                      Guiding Members Toward Healthier Lives.
                    </p>
                  </div>
                  {/* Stat Card 2 */}
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-500 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-white text-2xl font-bold leading-9">500+ Successful Transformations</h4>
                    <p className="text-gray-300 text-base font-normal leading-relaxed">
                      From Weight Loss to Muscle Gain.
                    </p>
                  </div>
                </div>
                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  {/* Stat Card 3 */}
                  <div className="w-full p-3.5 rounded-xl border border-gray-500 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-white text-2xl font-bold leading-9">20+ Certified Trainers</h4>
                    <p className="text-gray-300 text-base font-normal leading-relaxed">
                      Experts Ready to Help You Excel.
                    </p>
                  </div>
                  {/* Stat Card 4 */}
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-500 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-white text-2xl font-bold leading-9">99% Member Satisfaction</h4>
                    <p className="text-gray-300 text-base font-normal leading-relaxed">
                      Building Strength and Confidence Together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full bg-gray-700 rounded-3xl border border-gray-500 relative">
              <img
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src={AboutUsImage}
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
