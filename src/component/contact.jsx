import ContactCard from "./contactCard";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faCode,
  faTools,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <div className="my-6 border-1 border-zinc-900 hover:border-zinc-800 duration-300 hover:shadow-sm shadow-zinc-800 w-full flex flex-col p-4 rounded-xl justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <h1 className="text-xl">Contact</h1>
          </div>
          <div className="flex flex-row gap-2 flex-wrap mt-2">
            <ContactCard
              name="Github"
              iconstr={faGithub}
              url="https://github.com/coderplover"
            />
            <ContactCard
              name="İnstagram"
              iconstr={faInstagram}
              url="https://instagram.com/coderplover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
