import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function TechItem({name, iconstr}) {
    
    return (
        <>
            <div className="inline-flex items-center ">
                <div className="bg-zinc-900 border-1 border-zinc-950 hover:border-zinc-800 px-2 py-1 rounded-xl duration-300 flex flex-row items-center gap-2 hover:text-violet-600 hover:-translate-y-0.5">
                    <FontAwesomeIcon icon={iconstr} />
                    <p>{name}</p>
                </div>
            </div>
            
        </>
    )
}