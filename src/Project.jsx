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
    backgroundColor: isHovered ? 'rgba(179, 194, 213, 0.5)' : 'transparent',
  };

  return (
    <div
      style={styles}
      className="flex-col px-4 py-2 text-left relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          style={contentStyles}
          className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-start p-4 text-left"
        >
          <h1>
            Hello, this project is {props.title} and is a {props.type}
          </h1>
          {props.description}
          <div className="mt-[auto]">
            <h4>Tools:</h4>
            {props.tools}
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
