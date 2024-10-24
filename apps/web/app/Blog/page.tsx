export default function Blog() {
    const posts = [
      {
        id: 1,
        title: "How to Get Started with JavaScript",
        description: "A beginner's guide to JavaScript basics.",
        author: "John Doe",
        date: "October 19, 2024",
      },
      {
        id: 2,
        title: "Understanding React Hooks",
        description: "An overview of React's powerful hooks feature.",
        author: "Jane Smith",
        date: "October 18, 2024",
      },
    ];
  
    return (
      <div className="ui-max-w-6xl ui-mx-auto ui-p-6 ui-bg-gray-100">
        <header className="ui-text-center ui-py-8">
          <h1 className="ui-text-5xl ui-font-bold ui-text-gray-800">My Blog</h1>
          <p className="ui-text-gray-600 ui-mt-2">Sharing knowledge about web development and coding.</p>
        </header>
  
        <section className="ui-mt-10">
          <h2 className="ui-text-3xl ui-font-semibold ui-text-gray-800 ui-border-b-2 ui-pb-4 ui-mb-6">Recent Posts</h2>
  
          {posts.map((post) => (
            <div key={post.id} className="ui-bg-white ui-p-6 ui-mb-8 ui-rounded-lg ui-shadow-lg">
              <h3 className="ui-text-2xl ui-font-semibold ui-text-gray-800">{post.title}</h3>
              <p className="ui-text-gray-600 ui-mt-2">{post.description}</p>
              <div className="ui-mt-4 ui-text-gray-500 ui-text-sm">
                <span>By {post.author}</span> | <span>{post.date}</span>
              </div>
            </div>
          ))}
        </section>

        <footer className="ui-text-center ui-py-8 mt-12 ui-border-t">
          <p className="ui-text-gray-600">© 2024 Your Name. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  