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

function Project(props) {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    display: props.status ? 'flex' : 'none',
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const contentStyles = {
    backgroundColor: isHovered ? 'rgba(38, 42, 47, 0.5)' : 'transparent',
    color: 'white',
  };

  const uiTools = props.tools.map((tool) => (
    <span className="mr-5">{tool}</span>
  ));

  return (
    <a
      style={styles}
      className="flex-col px-4 py-2 text-left relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={props.link}
      target="_blank"
    >
      {isHovered && (
        <div
          style={contentStyles}
          className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-start p-4 text-left font-sans"
        >
          <h1 className="text-lg">
            Hello, this project is {props.title} and is a {props.type}
          </h1>
          <p className="mt-10">{props.description}</p>
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
