"use client";
import React from "react";
import { Globe } from "../components/ui/globe";
import { GlobeDemo } from "../components/GlobeDemo";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d3740] items-center justify-center">
      <GlobeDemo />
    </div>
  );
};

export default About;
