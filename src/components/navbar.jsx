import faviconImg from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex sm:flex-row flex-col items-center justify-center gap-3 sm:gap-5 select-none my-7 lg:my-10">
      <img
        src={faviconImg}
        alt="Frontend Mentor"
        draggable={false}
        className="w-[15rem] md:w-[20rem]"
      />
      <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[2.5rem] font-medium text-primary">X</h1>
      <h1 className="text-[2.1rem] text-center sm:text-[1.7rem] md:text-[2rem] font-bold">Arshvir Singh Kalsi</h1>
    </nav>
  );
};

export default Navbar;
