import { motion } from "framer-motion";

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer>
      <div className=" mt-5 border-t-1 border-zinc-800 py-5 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="text-center text-md font-light text-zinc-300">
            © {year} Tüm Haklar Saklıdır,{" "}
            <a href="/" className="text-violet-600 font-medium">
              Plover
            </a>
          </h1>
        </motion.div>
      </div>
    </footer>
  );
}
