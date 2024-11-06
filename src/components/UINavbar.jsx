import { useState } from "react";
import { Link } from "react-router-dom";
import faviconImg from "../assets/badge.png";

const UINavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={isMenuOpen ? handleMouseLeave : handleMouseEnter}
      className="fixed select-none rounded-full cursor-pointer m-4 shadow-xl bg-tertiary flex justify-center transition-all ease-out font-medium"
    >
      <div className="h-full flex items-center justify-center gap-x-1 bg-white rounded-full shadow-lg p-2.5">
        <img
          src={faviconImg}
          alt="Frontend Mentor"
          className="rounded-full w-8 lg:w-12"
          draggable={false}
        />
        <h1 className="text-[0.9rem] lg:text-[1.2rem] font-bold">X ASK</h1>
      </div>
      {isMenuOpen && (
        <div className="flex items-center gap-10 mx-5">
          <Link to="/">Home</Link>
          <Link
            to="https://github.com/ArshvirSk/Bento-Grid-UI"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
        </div>
      )}
    </div>
  );
};

export default UINavbar;
