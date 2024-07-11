"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import {
  CardHoverEffectDemo,
  projects,
} from "../components/CardHoverEffectDemo";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" bg-gradient-to-br from-slate-100 to-slate-500 py-4 bg-clip-text text-center text-md font-medium tracking-tight text-transparent md:text-2xl mt-10"
      >
        My Skill <br />
        <CardHoverEffectDemo projects={projects} />
      </motion.h1>
    </LampContainer>
  );
}
