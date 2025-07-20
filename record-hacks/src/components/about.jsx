import leftVector from "../assets/About_Left_Vectors.svg";
import rightVector from "../assets/About_Right_Vectors.svg";
import React, { useEffect } from "react";

const About = () => {
  const finalDate = new Date("March 29, 2025 18:00:00 GMT-05:00").getTime();
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const distance = finalDate - now;

    const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
      2,
      "0",
    );
    const hours = String(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    ).padStart(2, "0");
    const seconds = String(
      Math.floor((distance % (1000 * 60)) / 1000),
    ).padStart(2, "0");

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <section className="relative text-center" id="about">
      <img
        style={{
          width: "clamp(12rem, 33%, 33%)",
        }}
        className="absolute top-0 -left-16 -z-[1] h-auto"
        src={leftVector}
        draggable="false"
      />
      <img
        style={{
          width: "clamp(12rem, 33%, 33%)",
        }}
        className="absolute -right-16 bottom-0 -z-[1] h-auto"
        src={rightVector}
        draggable="false"
      />
      <div className="mx-auto max-w-[30rem] py-48 text-2xl leading-[1]">
        <div className="font-heading flex items-start justify-center text-[2.5rem] font-bold tracking-[4px]">
          <div>
            {timeLeft.days}
            <p className="m-0 text-[1rem] font-[1000]">day</p>
          </div>{" "}
          :
          <div>
            {timeLeft.hours}
            <p className="m-0 text-[1rem] font-[1000]">hour</p>
          </div>{" "}
          :
          <div>
            {timeLeft.minutes}
            <p className="m-0 text-[1rem] font-[1000]">min</p>
          </div>{" "}
          :
          <div className="w-12">
            {timeLeft.seconds}
            <p className="m-0 text-[1rem] font-[1000]">sec</p>
          </div>
        </div>
        <br />
        <p className="text-[1.5rem]">
          <b>Record Hacks</b> is a <b>24 hour</b> event where tech enthusiasts
          can come together to create something amazing!
        </p>
        <br />
        <div className="text-[1.25rem] leading-[0.8]">
          Over the years, we&apos;ve had
          <br /> <br />
          <div
            className="flex flex-row items-center justify-center gap-4 text-[1rem]"
            id="stats"
          >
            <span className="text-center">
              <b className="font-heading text-[2rem] font-bold">5,000+</b>{" "}
              <br /> participants
            </span>
            <div className="m-0 h-10 w-[2px] bg-black"></div>
            <span className="text-center">
              <b className="font-heading text-[2rem] font-bold">$100K+</b>{" "}
              <br /> in prizes
            </span>
            <div className="m-0 h-10 w-[2px] bg-black"></div>
            <span className="text-center">
              <b className="font-heading text-[2rem] font-bold">12</b>
              <br /> years
            </span>
          </div>
          <br />
          and so much more to come!
        </div>
      </div>
    </section>
  );
};

export default About;
