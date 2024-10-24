export default function About() {
    return (
      <div className="ui-max-w-4xl ui-mx-auto ui-p-6 ui-bg-gray-100">
        <header className="ui-text-center ui-py-8">
          <h1 className="ui-text-5xl ui-font-bold ui-text-gray-800">About Me</h1>
        </header>
  
        <section className="ui-mt-10 ui-text-gray-700">
          <p className="ui-text-lg ui-leading-relaxed">
            Hello! I'm <span className="font-semibold">JONATHAN</span>, a passionate web developer and software engineer. 
            I specialize in creating dynamic and responsive web applications, blending creativity with 
            technical expertise. With a background in both frontend and backend development, 
            I aim to deliver seamless user experiences through clean code and innovative solutions.
          </p>
        </section>
  
        <section className="ui-mt-10">
          <h2 className="ui-text-3xl ui-font-semibold ui-text-gray-800 ui-border-b-2 ui-pb-4 ui-mb-6">Skills</h2>
          <ul className="ui-list-disc ui-ml-6 ui-space-y-2 ui-text-gray-700">
            <li>Frontend: React, Next.js, HTML, CSS, JavaScript</li>
            <li>Backend: Node.js, Express, Prisma, PostgreSQL</li>
            <li>Tools & Platforms: Git, Docker, Tailwind CSS, Firebase</li>
            <li>Version Control & CI/CD: GitHub, Jenkins, Netlify</li>
          </ul>
        </section>

        <section className="ui-mt-10">
          <h2 className="ui-text-3xl ui-font-semibold ui-text-gray-800 ui-border-b-2 ui-pb-4 mb-6">Mission</h2>
          <p className="ui-text-lg ui-leading-relaxed ui-text-gray-700">
            My mission is to help businesses and individuals bring their ideas to life through
            web technology. I believe in the power of the web to connect people, solve problems, 
            and create engaging experiences. By continuously learning and staying up to date with 
            industry trends, I aim to craft impactful and meaningful solutions for the digital world.
          </p>
        </section>

        <section className="ui-mt-10">
          <h2 className="ui-text-3xl ui-font-semibold ui-text-gray-800 ui-border-b-2 ui-pb-4 ui-mb-6">Fun Facts</h2>
          <ul className="ui-list-disc ui-ml-6 ui-space-y-2 ui-text-gray-700">
            <li>In my free time, I enjoy coding personal projects and exploring new technologies.</li>
            <li>I'm a big fan of hiking and outdoor activities, which help me recharge.</li>
            <li>I love playing chess and consider it a great way to improve problem-solving skills.</li>
          </ul>
        </section>
 
        <footer className="ui-text-center ui-py-8 mt-12 ui-border-t">
          <p className="ui-text-gray-600">© 2024 Your Name. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  