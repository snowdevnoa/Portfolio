import { useState } from "react";
import Logo from "./Logo";

function Navbar() {
	const [miniMenu, setMiniMenu] = useState(false);
	let hamburgerMenu = (
		<div className="absolute min-w-[250px] text-white md:text-black md:hidden flex flex-col mr-20px text-[2rem] h-screen justify-evenly text-center mini-menu items-center sliding-menu">
			<a
				onClick={() => scrollToSection("contact")}
				className="contact border-white"
			>
				say hello!
			</a>
			<a onClick={() => scrollToSection("home")}>HOME</a>
			<a onClick={() => scrollToSection("bio")}>ABOUT</a>
			<a onClick={() => scrollToSection("projects")}>PROJECTS</a>
		</div>
	);

	function toggleMenu() {
		miniMenu ? setMiniMenu(false) : setMiniMenu(true);
	}

	function scrollToSection(sectionId) {
		const section = document.getElementById(sectionId);
		section.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<header className="w-full sticky top-0 md:top-unset z-10 bg-[#fbfbfb]">
			<nav className="max-w-[1400px] mx-auto py-5 px-[2rem] flex flex-col items-end md:flex-row md:justify-end md:px-unset">
				<Logo />

				<div className="flex row w-full justify-end items-center">
					<a
						className="hidden md:block mr-[4rem] w-[100px]"
						onClick={() => scrollToSection("home")}
					>
						HOME
					</a>
					<a
						className="hidden md:block mr-[4rem] w-[100px]"
						onClick={() => scrollToSection("bio")}
					>
						ABOUT
					</a>
					<a
						className="hidden md:block mr-[4rem] w-[100px]"
						onClick={() => scrollToSection("projects")}
					>
						PROJECTS
					</a>
					<a
						className="hidden md:block contact"
						onClick={() => scrollToSection("contact")}
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
							className={miniMenu ? "fill-white" : "fill-black"}
							d="M8.667 15h30a1 1 0 100-2h-30a1 1 0 100 2zM8.667 37h30a1 1 0 100-2h-30a1 1 0 100 2zM8.667 26h30a1 1 0 100-2h-30a1 1 0 100 2z"
						/>
					</svg>
				</div>

				{miniMenu ? hamburgerMenu : null}
			</nav>
		</header>
	);
}

export default Navbar;
