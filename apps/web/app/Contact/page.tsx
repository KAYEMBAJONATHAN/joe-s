export default function Contact() {
    return (
      <div className="ui-max-w-3xl ui-mx-auto ui-p-6 ui-bg-white">
        <header className="ui-text-center ui-py-8">
          <h1 className="ui-text-4xl ui-font-bold ui-text-gray-800">Contact Me</h1>
          <p className="ui-mt-4 text-gray-600">Feel free to get in touch with me via email or fill out the form below!</p>
        </header>
  
        <section className="ui-text-center ui-mt-10">
          <p className="ui-text-lg ui-font-medium ui-text-gray-800">Email: <a href="mailto:your.email@example.com" className="text-blue-600">your.email@example.com</a></p>
          <p className="ui-text-lg ui-font-medium ui-text-gray-800 ui-mt-2">Phone: <span className="text-blue-600">(0027) 746480168</span></p>
          <p className="ui-text-lg ui-font-medium ui-text-gray-800 ui-mt-2">Location: Pretora, South Africa</p>
        </section>

        <section className="ui-mt-12">
          <form className="ui-space-y-6">
            <div>
              <label htmlFor="name" className="ui-block ui-text-gray-700 ui-font-medium">Your Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="ui-w-full ui-p-3 ui-border ui-border-gray-300 ui-rounded-lg ui-shadow-sm ui-focus:outline-none ui-focus:ring ui-focus:border-blue-300"
                placeholder="Enter your name"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="ui-block ui-text-gray-700 ui-font-medium">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="ui-w-full ui-p-3 ui-border ui-border-gray-300 ui-rounded-lg ui-shadow-sm ui-focus:outline-none ui-focus:ring ui-focus:border-blue-300"
                placeholder="Enter your email"
              />
            </div>
  
            <div>
              <label htmlFor="subject" className="ui-block ui-text-gray-700 ui-font-medium">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="ui-w-full ui-p-3 ui-border ui-border-gray-300 ui-rounded-lg ui-shadow-sm ui-focus:outline-none ui-focus:ring ui-focus:border-blue-300"
                placeholder="Enter the subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="ui-block ui-text-gray-700 ui-font-medium">Your Message</label>
              <textarea
                id="message"
                name="message"
               
                className="ui-w-full ui-p-3 ui-border ui-border-gray-300 ui-rounded-lg ui-shadow-sm ui-focus:outline-none ui-focus:ring ui-focus:border-blue-300"
                placeholder="Enter your message"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div className="ui-text-center">
              <button
                type="submit"
                className="ui-px-6 ui-py-3 ui-bg-blue-600 ui-text-white ui-font-semibold ui-rounded-lg ui-shadow-md ui-hover:bg-blue-700 ui-focus:outline-none ui-focus:ring ui-focus:border-blue-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
  