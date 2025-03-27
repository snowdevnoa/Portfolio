/*
key={work.id}
      title={work.name}
      description={work.shortDescription}
      tools={work.tools}
      link={work.link}
      type={work.tag}
      status={work.visible}
      image={work.img}

*/
import { useState } from 'react';

function Project({ title, description, tools, link, type, status, image }) {
	const [isHovered, setIsHovered] = useState(false);

	const styles = {
		display: status ? 'flex' : 'none',
		backgroundImage: `url(${image})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
	};

	const contentStyles = {
		backgroundColor: isHovered ? 'rgba(26, 29, 33, 0.7)' : 'transparent',
		color: 'white',
		borderRadius: '10px',
	};

	const uiTools = tools.map((tool, index) => (
		<span
			key={index}
			className="mr-5"
		>
			{tool}
		</span>
	));

	return (
		<a
			style={styles}
			className="flex-col px-4 py-2 text-left relative animate-hide"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			href={link}
			target="_blank"
		>
			{isHovered && (
				<div
					style={contentStyles}
					className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-start p-4 text-left"
				>
					<h1 className="text-xl font-semibold">{title}</h1>
					<p className="mt-10 text-sm">{description}</p>
					<div className="mt-[auto]">
						<h4>Tools:</h4>
						{uiTools}
					</div>
				</div>
			)}
		</a>
	);
}

export default Project;
