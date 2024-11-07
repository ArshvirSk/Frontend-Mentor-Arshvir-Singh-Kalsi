import UINavbar from "../../components/UINavbar";
import AvatarImg from "./images/avatar.jpeg";

const SocialLinksUI = () => {
  return (
    <>
      <UINavbar />
      <div className="bg-[#141414] inter-regular text-white flex flex-col min-h-[calc(100vh-60px)] lg:min-h-screen justify-center items-center">
        <div className="bg-[#1f1f1f] rounded-xl p-3 lg:p-8 text-center flex flex-col justify-center items-center py-4">
          <img
            src={AvatarImg}
            alt="Avatar of Jessica Randall"
            className="rounded-full w-[5.2rem] lg:w-[6.5rem] my-3 lg:my-0"
          />
          <div className="my-5">
            <h1 className="text-[1.5rem] lg:text-[2rem] font-semibold">
              Jessica Randall
            </h1>
            <p className="text-[#c5f829] text-[0.85rem] lg:text-[1.1rem] font-bold mb-5 mt-1">
              London, United Kingdom
            </p>
            <p className="text-[0.9rem] lg:text-[1rem] my-6">
              &quot;Front-end developer and avid reader.&quot;
            </p>
          </div>
          <div className="flex flex-col w-[19rem] lg:w-[22rem] mx-2 lg:mx-5 gap-y-5 lg:gap-y-5 font-bold">
            <a
              href="#"
              className="bg-[#333333] hover:bg-[#c4f82a] focus:bg-[#c4f82a] hover:text-black focus:text-black rounded-xl py-3.5 transition-all ease-in"
            >
              GitHub
            </a>
            <a
              href="#"
              className="bg-[#333333] hover:bg-[#c4f82a] focus:bg-[#c4f82a] hover:text-black focus:text-black rounded-xl py-3.5 transition-all ease-in"
            >
              Frontend Mentor
            </a>
            <a
              href="#"
              className="bg-[#333333] hover:bg-[#c4f82a] focus:bg-[#c4f82a] hover:text-black focus:text-black rounded-xl py-3.5 transition-all ease-in"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="bg-[#333333] hover:bg-[#c4f82a] focus:bg-[#c4f82a] hover:text-black focus:text-black rounded-xl py-3.5 transition-all ease-in"
            >
              Twitter
            </a>
            <a
              href="#"
              className="bg-[#333333] hover:bg-[#c4f82a] focus:bg-[#c4f82a] hover:text-black focus:text-black rounded-xl py-3.5 transition-all ease-in"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialLinksUI;
