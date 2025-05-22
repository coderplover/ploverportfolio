import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactCard(props) {
  return (
    <>
      <a href={props.url} target="_blank">
        <div className="inline-flex items-center ">
          <div className="backdrop-blur-md bg-zinc-900/80 hover:bg-zinc-950 border-1 border-zinc-900 hover:border-zinc-800 px-2 py-1 rounded-xl duration-300 flex flex-row items-center gap-2 hover:text-violet-600 hover:-translate-y-0.5">
            <FontAwesomeIcon icon={props.iconstr} />
            <p className="text-xl">{props.name}</p>
          </div>
        </div>
      </a>
    </>
  );
}
