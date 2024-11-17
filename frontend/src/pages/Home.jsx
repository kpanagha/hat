
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const [newProject, setNewProject] = useState("");

  const handleCreateProject = () => {
    if (newProject) {
      setProjects([...projects, { id: Date.now(), name: newProject }]);
      setNewProject("");
    }
  };
  

  return (
    <div className="home-container">
      <header>
      
        <h1>My Projects</h1>
       
        <div className="create-project">
          <input
            type="text"
            placeholder="Enter project name"
            value={newProject}
            onChange={(e) => setNewProject(e.target.value)}
          />
          <button onClick={handleCreateProject}>Create New Project</button>
          
        </div>
      
       
      </header>
      <div className="project-list">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            {project.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
