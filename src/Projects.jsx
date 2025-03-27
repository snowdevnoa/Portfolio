import { useState } from 'react';
import data from './data.js';
import Project from './Project.jsx';
import { PROJECT_TYPES } from './constants.js';
import Container from './Container.jsx';

function Projects() {
	// To display the four main types of projects
	const uiTypes = PROJECT_TYPES.map((type) => (
		<div
			className="mb-10 w-full md:w-1/2 lg:w-1/4 project-type"
			key={type}
		>
			<button onClick={() => displayProjectType(type)}>{type}</button>
		</div>
	));

	// Default will display all projects unless type is clicked. Then component will rerender with the new given type
	const [works, setWorks] = useState(data);

	const allWorks = works.map((work) => (
		<Project
			key={work.id}
			title={work.name}
			description={work.shortDescription}
			tools={work.tools}
			link={work.link}
			type={work.tag}
			status={work.visible}
			image={work.img}
		/>
	));

	function displayProjectType(projectType) {
		console.log(projectType);
		setWorks((prevWorks) => {
			let newWorks = prevWorks.map((work) => {
				return {
					...work,
					visible:
						work.tag === projectType || projectType === 'All' ? true : false,
				};
			});
			return newWorks;
		});
	}

	return (
		<Container>
			<div
				className="min-h-screen flex flex-col items-center text-center mt-10"
				id="projects"
			>
				<div className="w-full text-xl flex flex-col items-center md:flex-row md:flex-wrap mt-[4rem] md:mt-[8rem] md:justify-evenly animate-hide mb-3">
					{uiTypes}
				</div>
				<div className="projects">{allWorks}</div>
			</div>
		</Container>
	);
}

export default Projects;
