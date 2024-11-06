import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-xl shadow-2xl mx-auto p-3 relative select-none">
      <img
        src={project.image}
        alt={project.title}
        className="w-[100vw] hover:shadow-[0_10px_40px_-12px] md:w-[33vw] xl:w-[24vw] shadow-2xl rounded-xl aspect-[16/9] object-cover object-top select-none -translate-x-7 -translate-y-6 transition-all ease-in"
        draggable={false}
      />
      <h1 className="vertical uppercase absolute top-2 right-2 text-[1.1rem] lg:text-[1.3rem] font-bold text-[#a8a8a8] tracking-[0.1em]">
        UI / UX Project
      </h1>
      <Link
        to={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="text-[1.7rem] sm:text-[2rem] font-bold hover:underline focus-within:underline"
      >
        {project.title}
      </Link>

      <div className="mt-1 sm:mt-3">
        <h1 className="mb-2 text-[0.9rem] sm:text-[1.3rem] text-[#727171]">
          Technologies:
        </h1>
        <div className="flex gap-1.5 sm:gap-3 my-3">
          {project.tags.map((tag) => (
            <h1
              key={tag.tag}
              style={{ backgroundColor: tag.color }}
              className="p-2 px-3 text-[0.9rem] sm:text-[1.1rem] rounded-2xl text-white font-semibold select-none"
            >
              {tag.tag}
            </h1>
          ))}
        </div>
      </div>

      <div className="flex gap-1 sm:gap-3 mt-3">
        <Link
          to={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="text-[1rem] sm:text-[1.1rem] transition-all ease-in p-3 border-2 border-white bg-secondary hover:border-secondary hover:bg-[#f2f6fc] hover:text-black font-medium text-white rounded-xl"
        >
          Live Link
        </Link>
        <Link
          to={project.gitUrl}
          target="_blank"
          rel="noreferrer"
          className="text-[1rem] sm:text-[1.1rem] transition-all ease-in p-3 border-2 border-white bg-secondary hover:border-secondary hover:bg-[#f2f6fc] hover:text-black font-medium text-white rounded-xl"
        >
          Github Link
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    liveUrl: PropTypes.string,
    gitUrl: PropTypes.string,
    tags: PropTypes.array,
    image: PropTypes.string,
  }),
};
