function Project(props) {
  const styles = {
    display: props.status ? 'block' : 'none',
  };
  return (
    <div style={styles}>
      Hello, this project is {props.title} and is a {props.type}
    </div>
  );
}

export default Project;
