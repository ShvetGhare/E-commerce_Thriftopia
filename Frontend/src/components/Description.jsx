import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import Antique from "/antique.jpg";
import Limited from "/limited.jpeg";

const Description = () => {
  const [inView, setInView] = useState(false);

  // Animation for scrolling in text
  const textAnimation1 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(100px)",
    config: { tension: 200, friction: 100 },
  });

  // Animation for scrolling in image
  const imageAnimation1 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100px)",
    config: { tension: 200, friction: 100 },
  });

  const textAnimation2 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100px)",
    config: { tension: 200, friction: 100 },
  });

  // Animation for scrolling in image
  const imageAnimation2 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(100px)",
    config: { tension: 200, friction: 100 },
  });

  // Intersection observer to detect scroll position
  const { ref, inView: observerInView } = useInView({
    triggerOnce: true, // Trigger only once when the element enters the view
    threshold: 0.1, // How much of the element should be visible before triggering
  });

  useEffect(() => {
    setInView(observerInView);
  }, [observerInView]);

  return (
    <div className="p-28 pl-35 w-full h-auto grid grid-rows-2 gap-20">
      <div className="w-[90%] h-112 flex items-start justify-start">
        <div className="flex justify-start items-end">
          {/* Animating Image */}
          <animated.img
            ref={ref}
            className="w-full h-112 mr-15"
            src={Antique}
            alt="Antique"
            style={imageAnimation1} // Apply animation to image
          />
        </div>
        <ul className="w-2/5 text-xl grid grid-row-4 gap-6 ml-5">
          <animated.li
            className="hover:opacity-100 text-5xl"
            style={textAnimation1}
          >
            ANTIQUE
          </animated.li>
          <animated.li style={textAnimation1}>
            ➔ Each antique item is listed with a detailed description that
            includes its origin, age, materials used, craftsmanship, and
            condition.
          </animated.li>
          <animated.li style={textAnimation1}>
            ➔ High-Quality Images showcasing multiple angles, close-ups of
            engravings, and unique features to give customers a clear view.
          </animated.li>
          <animated.li style={textAnimation1}>
            ➔ <strong>Price:</strong> Transparent pricing based on rarity,
            condition, and demand of the item.
          </animated.li>
          <animated.li style={textAnimation1}>
            ➔ <strong>Bestseller Status:</strong> Highlighting the most popular
            items with a “Bestseller” tag to help customers discover
            sought-after pieces.
          </animated.li>
        </ul>
      </div>

      {/* Second */}
      <div className="w-[90%] h-112 flex items-start justify-start">
        <ul className="w-2/5 text-xl grid grid-row-4 gap-6 ml-5">
          <animated.li
            className="hover:opacity-100 text-5xl"
            style={textAnimation2}
          >
            LIMITED ACCESS
          </animated.li>
          <animated.li style={textAnimation2}>
            ➔ Our Limited Access products are one-of-a-kind pieces, carefully
            curated for their rarity, age, and unique craftsmanship.
          </animated.li>
          <animated.li style={textAnimation2}>
            ➔ These items are only available to a select group of customers,
            ensuring exclusivity and premium access to the most sought-after
            pieces.
          </animated.li>
          <animated.li style={textAnimation2}>
            ➔ Transparent pricing based on the item’s rarity, condition, and
            demand, reflecting the true value of these extraordinary items.
          </animated.li>
          <animated.li style={textAnimation2}>
            ➔ Prioritized access is given to our loyal customers, VIP members,
            and those who have registered for early notifications on limited
            releases.
          </animated.li>
        </ul>
        <div className="flex justify-start items-end">
          {/* Animating Image */}
          <animated.img
            ref={ref}
            className="w-full h-112 ml-15"
            src={Limited}
            alt="Antique"
            style={imageAnimation2} // Apply animation to image
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
