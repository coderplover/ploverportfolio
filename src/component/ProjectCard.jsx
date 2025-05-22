export default function ProjectCard(props) {
  return (
    <>
      <a href={props.url} target="_blank">
        <div className="inline-flex flex-col items-center rounded-xl border-1 p-2 border-zinc-900 duration-300 hover:border-zinc-800 hover:-translate-y-0.5">
          <img
            src={props.img}
            alt="Modcenter"
            className="w-24 sm:w-24 md:w-36 rounded-xl"
          />
          <div>
            <h1 className="text-lg py-2">{props.name}</h1>
          </div>
        </div>
      </a>
    </>
  );
}
