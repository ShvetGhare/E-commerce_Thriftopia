import React, { useEffect, useState } from "react";
import Refund from "/arrow-left-right.svg";
import Call from "/contact.svg";
import Trust from "/book-open-check.svg";
import Title from "./Title";
import "../Onopen.css";

const OurPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once it’s visible
        }
      },
      {
        threshold: 0.1, // Trigger the effect when 10% of the element is in view
      }
    );

    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"WHY"} text2={"CHOOSE TRIFTOPIA"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          "Crafting clear, actionable policies that drive success and shape a
          stronger future."
        </p>
      </div>
      <div className="flex flex-col mt-20 flex-wrap sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
        <div className={`w-80 fade-up ${isVisible ? "visible" : ""}`}>
          <img src={Refund} className="w-12 m-auto mb-5" alt="Easy Exchange" />
          <p className="font-semibold">Easy Exchange Policy</p>
          <p className="text-gray-400">
            Hassle-free exchanges for a smooth shopping experience. We make
            returns easy and fast!
          </p>
        </div>
        <div className={`w-80 fade-up ${isVisible ? "visible" : ""}`}>
          <img src={Call} className="w-12 m-auto mb-5" alt="24/7 Contact" />
          <p className="font-semibold">24/7 Customer Support</p>
          <p className="text-gray-400">
            Our support team is available round-the-clock to assist you with any
            questions or concerns.
          </p>
        </div>
        <div className={`w-80 fade-up ${isVisible ? "visible" : ""}`}>
          <img src={Trust} className="w-12 m-auto mb-5" alt="Best Material" />
          <p className="font-semibold">100% Best Materials</p>
          <p className="text-gray-400">
            We use only the highest quality materials to ensure your
            satisfaction and long-lasting products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
