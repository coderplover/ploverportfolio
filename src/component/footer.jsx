export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer>
      <div className=" mt-5 border-t-1 border-zinc-800 py-5 ">
        <div>
          <h1 className="text-center text-md font-light text-zinc-300">
            © {year} Tüm Haklar Saklıdır,{" "}
            <a href="/" className="text-violet-600 font-medium">
              Plover
            </a>
          </h1>
        </div>
      </div>
    </footer>
  );
}
