import Plover from "../../public/plover.png"
import TechItem from "./techItem"
import { faJs, faPython, faHtml5,faCss3Alt,faReact } from '@fortawesome/free-brands-svg-icons'

export default function About() {
    return (
        <>
            <div className="inline-flex flex-col gap-5 select-none sm:flex-row">
                <div className="mt-5 border-1 border-zinc-900 hover:border-zinc-800 duration-300 hover:shadow-sm shadow-zinc-800 inline-flex flex-col p-4 rounded-xl gap-1 items-center">
                    <img src={Plover} alt="Plover" className="w-36 rounded-lg" />
                    <h1 className="text-xl">Plover</h1>
                    <span className="text-sm text-violet-600 font-light">Ui/UX Design, Web Developer</span>
                </div>

                <div className="mt-5 border-1 border-zinc-900 hover:border-zinc-800 duration-300 hover:shadow-sm shadow-zinc-800 w-full flex flex-col p-4 rounded-xl justify-between gap-2">
                    <div>
                        <h1 className="text-xl">About</h1>
                    <p className="text-sm text-zinc-300 font-light">Hello, I am 17 years old and I am interested in programming languages and technologies. I have been learning and practicing languages such as html, css, ui/ux design, javascript, python, node.js, discord.js, and discord.py for a long time. I have particularly gained experience in web design and development. Additionally, I have developed custom bots for discord servers using node.js and discord.js, and I have worked on data analytics and machine learning projects using python. I began my journey in software development 4 years ago and I have been constantly trying to improve myself during this time. I consider it very important to apply everything I learn and use it in real-life scenarios. Furthermore, I regularly read and follow updates on programming languages and technologies. Lastly, I am continuously working on software-related projects and trying to improve myself in this field. I want to make a career in this area in the future.</p>

                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl">Technolocy</h3>
                        <div className="flex flex-row gap-1 flex-wrap">
                            <TechItem name="JavaScript" iconstr={faJs}/>
                            <TechItem name="Python" iconstr={faPython}/>
                            <TechItem name="Html" iconstr={faHtml5}/>
                            <TechItem name="Css" iconstr={faCss3Alt}/>
                            <TechItem name="React" iconstr={faReact}/>
                            
                            
                        </div>
                    </div>
                </div>     
            </div> 
        </>
    )
}