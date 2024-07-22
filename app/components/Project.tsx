"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title:
      "Web-based intercountry reservation application landing page with nextjs",
    description:
      "The villa reservation application that I created using Next.js and Prisma ORM makes it easy for users to book villas on vacation. Equipped with a map integration feature, the app helps users find and select villas according to their desired location abroad. With a responsive interface and Prisma integration for database management, users can easily browse villa options, view details, and make reservations quickly and efficiently.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Application",
    description: "",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <div className="h-full w-full">
          <Image
            src={"/images/cekhome.png"}
            width={300}
            height={300}
            className="object-cover"
            alt="linear board demo"
          />
        </div>
      </div>
    ),
  },
  {
    title:
      "Hospital application services consisting of application admin, users, call center",
    description:
      "The hospital application I developed using Laravel facilitates admins, users, and call centers in the examination process and queue management. Users can quickly enter their examination data, saving time with high efficiency. The app is designed to enhance user experience with an intuitive interface, as well as provide admins and call centers with the tools needed to effectively manage and monitor queues.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Application",
    description: "",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <div className="h-full w-full">
          <Image
            src={"/images/rsucinta.png"}
            width={300}
            height={300}
            className="object-cover"
            alt="linear board demo"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Catering Apps",
    description:
      "The catering application I developed uses Next.js for the frontend, Golang for the backend, and PostgreSQL as the database. This application provides convenience and simplicity in catering ordering, allowing users to place orders easily through online payment. With the integration of Next.js' responsive user interface and Golang's backend reliability, users can browse menus",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Application",
    description: "",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <div className="h-full w-full">
          <Image
            src={"/images/catering.png"}
            width={300}
            height={300}
            className="object-cover"
            alt="linear board demo"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Interactive Sales Dashboard with streamlit",
    description:
      "Interactive Dashboard with Streamlit: This project uses Python's Streamlit library to create a dashboard that visually and interactively displays sales data, revenue, and geolocation information of buying users.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Application",
    description: "",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <div className="h-full w-full">
          <Image
            src={"/images/dashboard.png"}
            width={300}
            height={300}
            className="object-cover"
            alt="linear board demo"
          />
        </div>
      </div>
    ),
  },
  {
    title: "this is my project in the nearest future",
    description: "",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
