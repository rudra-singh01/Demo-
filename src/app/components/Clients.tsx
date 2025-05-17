import { ChevronLeft, ChevronRight, PlusCircle } from "lucide-react";
import React, { useState } from "react";

const Clients = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
      name: "Leonard Heizer",
      position: "CEO",
      avatar: "/api/placeholder/100/100",
    },
    {
      quote:
        "The team exceeded our expectations and delivered a product that was both innovative and reliable. Their attention to detail is unmatched.",
      name: "Sophia Carter",
      position: "CTO",
      avatar: "/api/placeholder/101/101",
    },
    {
      quote:
        "Working with this team has been a game-changer for our business. Their expertise and dedication are truly commendable.",
      name: "Michael Johnson",
      position: "Product Manager",
      avatar: "/api/placeholder/102/102",
    },
  ];

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <div className="w-full h-screen flex justify-between items-center bg-white">
      <div className="left w-1/2  h-full flex items-center justify-center relative">
        <div
          className="top1 absolute top-[25%] left-[24%] bg-zinc-300 w-[13vw] h-[25vh]"
          style={{
            borderRadius: "59px 12px 65px 0px",
            WebkitBorderRadius: "59px 12px 65px 0px",
            MozBorderRadius: "59px 12px 65px 0px",
            boxShadow: "11px 6px 0px 5px rgba(255,92,0,0.71) inset",
          }}
        ></div>
        <div
          className="top1 absolute top-[16%] right-[18%] bg-zinc-300 w-[15vw] h-[35vh]"
          style={{
            borderRadius: "103px 10px 104px 0px",
            WebkitBorderRadius: "103px 10px 104px 0px",
            MozBorderRadius: "103px 10px 104px 0px",
          }}
        ></div>
        <div
          className="top1 absolute bottom-[23%] left-[22%] bg-zinc-300 w-[13vw] h-[25vh]"
          style={{
            borderRadius: "64px 10px 64px 0px",
            WebkitBorderRadius: "64px 10px 64px 0px",
            MozBorderRadius: "64px 10px 64px 0px",
          }}
        ></div>
        <div
          className="top1 absolute bottom-[23%] right-[22%] bg-zinc-300 w-[13vw] h-[25vh]"
          style={{
            borderRadius: "0px 10px 130px 0px",
            WebkitBorderRadius: "0px 10px 130px 0px",
            MozBorderRadius: "0px 10px `30px 0px",
          }}
        ></div>
        <div className="circle-icon w-22 h-22 rounded-full bg-zinc-900 flex items-center justify-center text-white z-11">
          <PlusCircle
            size={80}
            className="hover:text-orange-400 transition-all"
          />
        </div>
      </div>
      <div className="right w-1/2 0 h-full flex  justify-center text-white z-11 pt-20">
        <div className="py-12 px-4">
          <div className="mb-8">
            <p className="text-orange-500 font-bold text-sm tracking-wider uppercase">
              .: KNOW WHAT OUR CLIENTS SAYS :.
            </p>
            <h2 className="text-5xl font-bold mt-4 mb-6 text-black">
              Made The Biggest
              <br />
              Players Happy
            </h2>

            <div className="flex text-orange-500 mb-4">
              <span>★★★★★</span>
            </div>

            <p className="text-gray-600 text-lg w-[70%]">
              {testimonials[currentTestimonial].quote}
            </p>
          </div>

          <div className="flex items-center justify-between w-[70%] ">
            <div className="flex items-center">
              <div
                className="w-16 h-16 rounded-full overflow-hidden "
                style={{ boxShadow: "9px 6px 5px 0px rgba(255,92,0,0.77)" }}
              >
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-xl">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={handlePrev}
                className="w-12 h-12 text-black rounded-full border flex items-center justify-center"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 text-black rounded-full border flex items-center justify-center"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
