import NavbarLink from "./navbarLink";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <>
      <div className=" mt-5 border-b-1 border-zinc-800 pb-5 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="text-center text-2xl font-medium text-violet-600">
            Plover
          </h1>
        </motion.div>
      </div>
    </>
  );
}
