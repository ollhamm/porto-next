import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen items-center bg-[#05171b] justify-center">
      <div className="flex flex-row bg-[#134f5c] bg-opacity-30 p-4 rounded-md cursor-pointer justify-center gap-4 text-white">
        <a
          href="https://www.instagram.com/_ilhammdd"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/ilham-kusmayadi-0744a727a/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:ilhamkusmayadi65@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
