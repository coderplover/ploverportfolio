import ProjectCard from "./projectCard"

export default function Project() {
    return (
        <>
            <div className="mt-6 border-1 border-zinc-900 hover:border-zinc-800 duration-300 hover:shadow-sm shadow-zinc-800 w-full flex flex-col p-4 rounded-xl justify-between gap-2">
                <div>
                    <h1 className="text-xl">Projects</h1>
                    
                    <div className="flex flex-wrap gap-5 mt-5">
                        <ProjectCard name="ModCenter" img="../../public/modcenter.png"/>
                        <ProjectCard name="Xniop Portfolio" img="http://plover.rf.gd/img/xniopp.gif"/>
                        
                    </div>
            
                </div>
                                
            </div>     
        </>
    )
}