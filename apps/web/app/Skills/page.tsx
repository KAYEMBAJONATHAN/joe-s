export default function Skills() {
    return (
      <div className="ui-max-w-4xl ui-mx-auto ui-p-6 ui-bg-white">
        <header className="ui-text-center ui-py-8">
          <h1 className="ui-text-4xl ui-font-bold ui-text-gray-800">Skills</h1>
          <p className="ui-mt-4 text-gray-600"><h2>A showcase of my technical and soft skills</h2></p>
        </header>

        <section className="ui-mt-10">
          <h2 className="ui-text-2xl ui-font-semibold ui-text-gray-800 ui-mb-4">Technical Skills</h2>
          <div className="ui-grid ui-grid-cols-1 ui-md:grid-cols-2 ui-lg:grid-cols-3 ui-gap-6">
            <div className="ui-bg-gray-100 ui-p-4 ui-rounded-lg ui-shadow-md">
              <h3 className="ui-text-xl ui-font-bold ui-text-gray-700">Frontend</h3>
              <ul className="ui-list-disc ui-list-inside ui-mt-2 ui-text-gray-600">
                <li>HTML & CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>React & Next.js</li>
                <li>Tailwind CSS & Bootstrap</li>
              </ul>
            </div>

            <div className="ui-bg-gray-100 ui-p-4 ui-rounded-lg ui-shadow-md">
              <h3 className="ui-text-xl ui-font-bold ui-text-gray-700">Backend</h3>
              <ul className="ui-list-disc ui-list-inside ui-mt-2 ui-text-gray-600">
                <li>Node.js & Express</li>
                <li>Prisma & SQL Databases</li>
                <li>RESTful APIs & GraphQL</li>
                <li>Authentication (JWT, OAuth)</li>
              </ul>
            </div>
  
            <div className="ui-bg-gray-100 ui-p-4 ui-rounded-lg ui-shadow-md">
              <h3 className="ui-text-xl ui-font-bold ui-text-gray-700">Tools & DevOps</h3>
              <ul className="ui-list-disc ui-list-inside ui-mt-2 ui-text-gray-600">
                <li>Git & GitHub</li>
                <li>Docker & Kubernetes</li>
                <li>CI/CD (Jenkins, GitHub Actions)</li>
                <li>Testing (Jest, Cypress)</li>
              </ul>
            </div>
          </div>
        </section>
  
        <section className="mt-12">
          <h2 className="ui-text-2xl ui-font-semibold ui-text-gray-800 ui-mb-4">Soft Skills</h2>
          <div className="ui-grid ui-grid-cols-1 ui-md:grid-cols-2 ui-gap-6">
            <div className="ui-bg-gray-100 ui-p-4 ui-rounded-lg ui-shadow-md">
              <h3 className="ui-text-xl ui-font-bold ui-text-gray-700">Communication</h3>
              <ul className="ui-list-disc ui-list-inside ui-mt-2 ui-text-gray-600">
                <li>Effective team communication</li>
                <li>Technical documentation</li>
                <li>Client interaction</li>
              </ul>
            </div>
  
            <div className="ui-bg-gray-100 ui-p-4 ui-rounded-lg ui-shadow-md">
              <h3 className="ui-text-xl ui-font-bold ui-text-gray-700">Problem-Solving</h3>
              <ul className="ui-list-disc ui-list-inside ui-mt-2 ui-text-gray-600">
                <li>Analytical thinking</li>
                <li>Debugging & troubleshooting</li>
                <li>Creative solutions to technical challenges</li>
              </ul>
            </div>
          </div>
        </section>
  
        <footer className="ui-text-center ui-py-8 mt-12 ui-border-t">
          <p className="ui-text-gray-600">© 2024 Your Name. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  