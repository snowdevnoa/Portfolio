// import ThreeScene from './ThreeScene';
import { animate, createScope } from "animejs";
import { useEffect, useRef } from "react";

// const animation = animate(lightTargetPosition, parameter)

function Intro() {
	const root = useRef(null);
	const scope = useRef(null);
	useEffect(() => {
		console.log("root.current inside useEffect:", root.current);
		console.log("spans found:", root.current.querySelectorAll("span").length);

		scope.current = createScope({ root }).add(() => {
			animate("span", {
				// Property keyframes
				y: [
					{ to: "-2.75rem", ease: "outExpo", duration: 600 },
					{ to: 0, ease: "outBounce", duration: 800, delay: 100 },
				],
				// Property specific parameters
				rotate: {
					from: "-1turn",
					delay: 0,
				},
				delay: (_, i) => i * 50, // Function based value
				ease: "inOutCirc",
				loopDelay: 1000,
				loop: true,
			});
		});
		return () => scope.current.revert();
	}, []);

	return (
		<div
			className="min-h-screen flex flex-wrap md:flex-no-wrap intro"
			ref={root}
		>
			<div className="w-full md:w-3/5 flex justify-center items-center">
				3D OBJECT IN PROGRESS
			</div>
			<div className="w-full md:w-2/5 flex flex-col justify-center items-center">
				<div className="text-9xl mb-12 text-gradient">NOA</div>
				<h3 className="px-10 text-center tracking-[0.25rem]">
					<span>D</span>
					<span>e</span>
					<span>v</span>
					<span>e</span>
					<span>l</span>
					<span>o</span>
					<span>p</span>
					<span>e</span>
					<span>r</span>
					<span>, </span>
					<span> </span>
					<span>D</span>
					<span>e</span>
					<span>s</span>
					<span>i</span>
					<span>g</span>
					<span>n</span>
					<span>e</span>
					<span>r</span>
					<span>,</span>
					<span> </span>
					<span>J</span>
					<span>a</span>
					<span>z</span>
					<span>z</span>
					<span> </span>
					<span>E</span>
					<span>n</span>
					<span>t</span>
					<span>h</span>
					<span>u</span>
					<span>s</span>
					<span>i</span>
					<span>a</span>
					<span>s</span>
					<span>t</span>
				</h3>
			</div>
		</div>
	);
}

export default Intro;
