export default function Resume() {
    return (
      <div className="ui-max-w-4xl ui-mx-auto ui-p-8 ui-bg-white ui-shadow-lg ui-rounded-lg">
        <header className="ui-text-center ui-border-b ui-pb-4 ui-mb-8">
          <h1 className="ui-text-4xl ui-font-bold ui-text-gray-800">Your Name</h1>
          <p className="ui-text-gray-600 ui-mt-2">
            Email: your.email@example.com | Phone: (123) 456-7890 | Location: Your City
          </p>
        </header>
  
        <section className="ui-mb-8">
          <h2 className="ui-text-2xl ui-font-semibold ui-text-gray-800 ui-border-b ui-pb-2 ui-mb-4">Experience</h2>
          <div className="ui-mb-6">
            <h3 className="ui-text-xl ui-font-medium ui-text-gray-700">Job Title - Company Name</h3>
            <p className="ui-text-gray-600">Start Date - End Date</p>
            <ul className="ui-list-disc ui-list-inside ui-mt-2 ui-text-gray-600">
              <li>Key responsibility or achievement #1</li>
              <li>Key responsibility or achievement #2</li>
              <li>Key responsibility or achievement #3</li>
            </ul>
          </div>
        </section>
  
        <section className="ui-mb-8">
          <h2 className="ui-text-2xl ui-font-semibold ui-text-gray-800 ui-border-b ui-pb-2 ui-mb-4">Education</h2>
          <div className="ui-mb-6">
            <h3 className="ui-text-xl ui-font-medium ui-text-gray-700">Degree - University Name</h3>
            <p className="ui-text-gray-600">Year of Graduation</p>
          </div>
        </section>
  
        <section className="ui-mb-8">
          <h2 className="ui-text-2xl ui-font-semibold ui-text-gray-800 ui-border-b ui-pb-2 ui-mb-4">Skills</h2>
          <ul className="ui-list-disc ui-list-inside ui-mt-2 ui-text-gray-600">
            <li>Programming Languages: JavaScript, Python, etc.</li>
            <li>Frameworks/Libraries: React, Next.js, etc.</li>
            <li>Tools: Git, Docker, etc.</li>
          </ul>
        </section>
  
        <section>
          <h2 className="ui-text-2xl ui-font-semibold ui-text-gray-800 ui-border-b ui-pb-2 ui-mb-4">Projects</h2>
          <div className="ui-mb-6">
            <h3 className="ui-text-xl ui-font-medium ui-text-gray-700">Project Title</h3>
            <p className="ui-text-gray-600 mt-2">
              Description of the project. Mention technologies used, what the project is about, and your role in it.
            </p>
          </div>
        </section>
      </div>
    );
  }
  