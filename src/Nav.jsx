import { useState } from 'react';

function Navbar() {
  const [miniMenu, setMiniMenu] = useState(false);
  let hamburgerMenu = (
    <div className="absolute md:hidden flex flex-col mr-20px text-lg h-screen justify-around text-center mini-menu">
      <a onClick={() => scrollToSection('home')}>HOME</a>
      <a onClick={() => scrollToSection('bio')}>ABOUT</a>
      <a onClick={() => scrollToSection('projects')}>WORKS</a>
      <a onClick={() => scrollToSection('contact')}>CONTACT</a>
    </div>
  );

  function toggleMenu() {
    miniMenu ? setMiniMenu(false) : setMiniMenu(true);
  }

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className="w-full sticky top-0 py-5 pr-2 flex flex-col items-end md:absolute md:flex-row md:justify-evenly md:pr-0 z-10">
      <a className="hidden md:block" onClick={() => scrollToSection('home')}>
        HOME
      </a>
      <a className="hidden md:block" onClick={() => scrollToSection('bio')}>
        ABOUT
      </a>
      <a
        className="hidden md:block"
        onClick={() => scrollToSection('projects')}
      >
        WORKS
      </a>
      <a className="hidden md:block" onClick={() => scrollToSection('contact')}>
        CONTACT
      </a>
      <img
        src=""
        alt="Hamburger Icon"
        className="mr-10px md:hidden hover:cursor-pointer z-20"
        onClick={toggleMenu}
      />
      {miniMenu ? hamburgerMenu : null}
    </nav>
  );
}

export default Navbar;
