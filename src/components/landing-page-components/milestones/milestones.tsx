"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Milestones = () => {
  const sectionRef = useRef(null);
  const kmRef = useRef(null);
  const customersRef = useRef(null);
  const adventuresRef = useRef(null);



  const milestones = {
    kilometers: 2500,
    customers: 10,
    adventures: 5,
  };

  useGSAP(() => {
    const animateCounter = (
      ref: React.RefObject<HTMLElement>,
      target: number
    ) => {

      gsap.fromTo(
        ref.current,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none reset",
          },
          onUpdate: function () {
            if (ref.current) {
              ref.current.innerText = Math.ceil(
                this.targets()[0].innerText
              ).toString();
            }
          },
        }
      );

    };

    animateCounter(kmRef, milestones.kilometers);
    animateCounter(customersRef, milestones.customers);
    animateCounter(adventuresRef, milestones.adventures);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="col-span-12 text-white text-center flex flex-col gap-10 min-h-screen justify-center items-center p-6"
    >
      <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight w-full md:w-3/4 font-black">
        We have travelled{" "}
        <span className="hover:text-primary" ref={kmRef}>
          0
        </span>{" "}
        by serving over{" "}
        <span ref={customersRef} className="hover:text-primary">

          0
        </span>{" "}
        customers and completing{" "}
        <span className="hover:text-primary" ref={adventuresRef}>
          0
        </span>{" "}
        adventures.
      </p>
    </section>
  );
};

export default Milestones;
