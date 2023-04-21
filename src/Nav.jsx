import { useState } from 'react';

function Navbar() {
  const [miniMenu, setMiniMenu] = useState(false);
  let hamburgerMenu = (
    <div className="absolute md:hidden flex flex-col mr-20px text-[2rem] h-screen justify-around text-center mini-menu">
      <a onClick={() => scrollToSection('contact')} className="contact">
        say hello!
      </a>
      <a onClick={() => scrollToSection('home')}>HOME</a>
      <a onClick={() => scrollToSection('bio')}>ABOUT</a>
      <a onClick={() => scrollToSection('projects')}>WORKS</a>
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
    <header className="w-full sticky">
      <nav className="max-w-[1400px] mx-auto py-5 px-[2rem] flex flex-col items-end md:flex-row md:justify-end md:pr-0 z-10">
        <img src="" alt="logo" className="mr-[auto] hidden md:block" />
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
        <a
          className="hidden md:block contact"
          onClick={() => scrollToSection('contact')}
        >
          say hello!
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          alt="Hamburger Icon"
          className="mr-10px md:hidden hover:cursor-pointer z-20 h-[4rem]"
          onClick={toggleMenu}
        >
          <path
            fill="#231F20"
            d="M8.667 15h30a1 1 0 100-2h-30a1 1 0 100 2zM8.667 37h30a1 1 0 100-2h-30a1 1 0 100 2zM8.667 26h30a1 1 0 100-2h-30a1 1 0 100 2z"
          />
        </svg>

        {miniMenu ? hamburgerMenu : null}
      </nav>
    </header>
  );
}

export default Navbar;
