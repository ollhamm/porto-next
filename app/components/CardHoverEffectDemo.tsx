import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

interface Project {
  title: string;
  description: string;
  link: string;
}

interface Props {
  projects: Project[];
}

export const CardHoverEffectDemo: React.FC<Props> = ({ projects }) => {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-8">
      <HoverEffect items={projects} />
    </div>
  );
};

export const projects = [
  {
    title: "python",
    description:
      "Python is a high-level programming language designed for syntax clarity and readability.",
    link: "https://www.python.org/",
  },
  {
    title: "JavaScript",
    description:
      "Programming language that is often used to develop interactive web applications",
    link: "https://www.javascript.com/",
  },
  {
    title: "PHP",
    description:
      "PHP is a server-side scripting language designed specifically for web development",
    link: "https://www.php.net/docs.php",
  },
  {
    title: "ReactJS",
    description:
      "JavaScript library used to build the user interface (UI) in web applications",
    link: "https://react.dev/",
  },
  {
    title: "NextJS",
    description:
      "React framework is optimized for the development of web applications that are server-side rendering (SSR) and static site generation (SSG).",
    link: "https://nextjs.org/",
  },
  {
    title: "Laravel",
    description:
      "PHP framework that provides the structure and tools to build web applications quickly and efficiently.",
    link: "https://laravel.com/docs/11.x/releases",
  },
  {
    title: "MySQL",
    description: "Relational database management (RDBMS)",
    link: "https://www.mysql.com/",
  },
  {
    title: "PostgreSQL",
    description:
      "An open source and extremely powerful relational database management system (RDBMS).",
    link: "https://www.postgresql.org/",
  },
  {
    title: "MongoDB",
    description:
      "A NoSQL database known for its flexibility in storing data in the rich JSON document format",
    link: "https://www.mongodb.com/",
  },
];
