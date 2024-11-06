import { projects } from "../data";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-7 lg:px-10 gap-y-16 gap-x-12 mb-10">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
