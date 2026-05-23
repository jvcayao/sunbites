"use client";

import * as React from "react";

import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Menu } from "@/components/sections/Menu";
import { Products } from "@/components/sections/Products";
import {
  HowWallet,
  HowPos,
  HowPortal,
  HowBenefits,
} from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA, Footer } from "@/components/sections/Cta";

export default function Page() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".sb-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top <= window.innerHeight * 0.9) {
        el.classList.add("is-visible");
      }
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div data-screen-label="01 Sunbites Landing Page">
      <Nav />
      <Hero />
      <div className="sb-reveal"><Problem /></div>
      <div className="sb-reveal"><Solution /></div>
      <div className="sb-reveal"><Menu /></div>
      <div className="sb-reveal"><Products /></div>
      <div className="sb-reveal"><HowWallet /></div>
      <div className="sb-reveal"><HowPos /></div>
      <div className="sb-reveal"><HowPortal /></div>
      <div className="sb-reveal"><HowBenefits /></div>
      <div className="sb-reveal"><Testimonials /></div>
      <div className="sb-reveal"><CTA /></div>
      <Footer />
    </div>
  );
}
