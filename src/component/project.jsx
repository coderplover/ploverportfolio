import ProjectCard from "./projectCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faCode,
  faTools,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  return (
    <>
      <div className="mt-6 border-1 border-zinc-900 hover:border-zinc-800 duration-300 hover:shadow-sm shadow-zinc-800 w-full flex flex-col p-4 rounded-xl justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCode} />
            <h1 className="text-xl">Projects</h1>
          </div>

          <div className="flex flex-wrap gap-5 mt-5">
            <ProjectCard
              name="ModCenter"
              img="../../public/modcenter.png"
              url="https://www.instagram.com/_modcenter/"
            />
            <ProjectCard
              name="Xniop Portfolio"
              img="http://plover.rf.gd/img/xniopp.gif"
              url="https://xniopapp.vercel.app/"
            />
          </div>
        </div>
      </div>
    </>
  );
}
