const Navbar = () => {
  return (
    <nav className="w-full px-24   ">
      <div className="flex  h-[10vh] text-lg  items-center justify-between">
        <div className="font-bold text-cursive ">VALORANT DETAILS</div>
        <div className="">
          <ul className="flex gap-5">
            <li>Home </li>
            <li>About </li>
            <li>Agents</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
