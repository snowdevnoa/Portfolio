import { useState } from 'react';

function Navbar() {
  const [miniMenu, setMiniMenu] = useState(false);
  let hamburgerMenu = (
    <div className="absolute md:hidden flex flex-col mr-20px text-lg h-screen justify-around text-center mini-menu">
      <a>HOME</a>
      <a>ABOUT</a>
      <a>WORKS</a>
      <a>CONTACT</a>
    </div>
  );

  function toggleMenu() {
    miniMenu ? setMiniMenu(false) : setMiniMenu(true);
  }

  return (
    <nav className="w-full sticky top-0 py-5 pr-2 flex flex-col items-end md:absolute md:flex-row md:justify-evenly md:pr-0 z-10">
      <a className="hidden md:block">HOME</a>
      <a className="hidden md:block">ABOUT</a>
      <a className="hidden md:block">WORKS</a>
      <a className="hidden md:block">CONTACT</a>
      <img
        src="./assets/react.svg"
        alt="Hamburger Icon"
        className="mr-10px md:hidden hover:cursor-pointer z-20"
        onClick={toggleMenu}
      />
      {miniMenu ? hamburgerMenu : null}
    </nav>
  );
}

export default Navbar;
