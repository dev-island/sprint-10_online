import './project.styles.css';
function Project(){
  function sayProj() {
    console.log("YO! I'm a project")
  }
  return {
    sayProj,
  }
}

export const createProject = () => {
  const newProj = new Project();
  newProj.sayProj();
};

export default Project;
