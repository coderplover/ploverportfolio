import Plover from "https://xniopapp.vercel.app/_next/image?url=%2Fxniop.png&w=256&q=75";
import { motion } from "framer-motion";
import TechItem from "./techItem";
import {
  faSquareJs,
  faPython,
  faHtml5,
  faCss3Alt,
  faReact,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faCode,
  faTools,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      <motion.div className="inline-flex flex-col gap-5 select-none sm:flex-row">
        {/* Plover kutusu animasyonu */}
        <motion.div
          className="mt-5 border-1 border-zinc-900 hover:border-zinc-800 duration-300 hover:shadow-sm shadow-zinc-800 inline-flex flex-col p-4 rounded-xl gap-1 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img src={Plover} alt="Plover" className="w-36 rounded-lg" />
          <h1 className="text-xl">Plover</h1>
          <span className="text-sm text-violet-600 font-light">
            Ui/UX Design, Web Developer
          </span>
        </motion.div>

        {/* About + Technology kutusu animasyonu */}
        <motion.div
          className="mt-5 border-1 border-zinc-900 hover:border-zinc-800 duration-300 hover:shadow-sm shadow-zinc-800 w-full flex flex-col p-4 rounded-xl justify-between gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUser} />
              <h1 className="text-xl">About</h1>
            </div>
            <p className="text-sm text-zinc-300 font-light">
              Hello! I'm 18 years old and have been immersed in software and
              design for the past 4 years. My journey began with HTML, CSS, and
              Python. I developed Discord bots using Python's PyCord library and
              built various websites with Flask. I also worked on web projects
              using PHP for a while. Currently, I've stepped into the world of
              JavaScript and am learning React. In addition, I design user
              interfaces with Figma and have enough experience with Photoshop
              and Adobe Illustrator to meet my design needs. I truly enjoy
              continuously improving myself in both software and design!
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTools} />
              <h3 className="text-xl">Technolocy</h3>
            </div>
            <div className="flex flex-row gap-1 flex-wrap">
              <TechItem name="JavaScript" iconstr={faSquareJs} />
              <TechItem name="Python" iconstr={faPython} />
              <TechItem name="Html" iconstr={faHtml5} />
              <TechItem name="Css" iconstr={faCss3Alt} />
              <TechItem name="React" iconstr={faReact} />
              <TechItem name="Figma" iconstr={faFigma} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
