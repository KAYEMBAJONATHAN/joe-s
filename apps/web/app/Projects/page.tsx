export default function Projects() {
    const projects = [
      {
        title: "Project 1",
        description: "A brief description of what the project is about and the technologies used.",
        technologies: ["React", "Tailwind CSS", "Node.js"],
        link: "https://github.com/your-repo/project-1",
        demo: "https://your-demo.com/project-1"
      },
      {
        title: "Project 2",
        description: "A brief description of what the project is about and the technologies used.",
        technologies: ["Next.js", "Prisma", "TypeScript"],
        link: "https://github.com/your-repo/project-2",
        demo: "https://your-demo.com/project-2"
      },
    ];
  
    return (
      <div className="ui-max-w-6xl ui-mx-auto ui-p-3">
        <header className="ui-text-center ui-py-8">
          <h1 className="ui-text-4xl ui-font-bold ui-text-gray-800">My Projects</h1>
          <p className="ui-mt-4 ui-text-gray-600">Here are some of the projects I've worked on recently.</p>
        </header>
  
        <section className="ui-grid ui-grid-cols-1 ui-sm:grid-cols-2 ui-gap-6 ui-mt-10">
          {projects.map((project, index) => (
            <div key={index} className="ui-bg-white ui-p-6 ui-rounded-lg ui-shadow-lg">
              <h3 className="ui-text-2xl ui-font-bold ui-text-gray-800">{project.title}</h3>
              <p className="ui-text-gray-600 ui-mt-2">{project.description}</p>
              <ul className="ui-mt-4 flex ui-flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <li key={i} className="ui-bg-gray-200 ui-px-3 ui-py-1 ui-rounded-full ui-text-sm ui-text-gray-700">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="ui-mt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  className="ui-text-blue-600 ui-hover:underline ui-mr-4"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  className="ui-text-blue-600 ui-hover:underline"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
  