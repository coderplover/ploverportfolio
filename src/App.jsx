import { useState } from "react";
import reactLogo from "./assets/react.svg";

import Navbar from "./component/navbar.jsx";
import About from "./component/about.jsx";
import Project from "./component/project.jsx";
import Contact from "./component/contact.jsx";
import Footer from "./component/footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="Container w-[70%] mx-auto text-zinc-50 select-none">
        <div className="bg-violet-600/5 w-256 h-256 z-[-1] left-0 top-50 -translate-x-[50%] rounded-[50%] fixed blur-3xl "></div>
        <div className="bg-violet-600/5 w-256 h-256 z-[-1] right-0 top-0 translate-x-[50%] -translate-y-[50%] rounded-[50%] fixed blur-3xl "></div>
        <Navbar />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
