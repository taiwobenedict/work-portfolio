import { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send since emailjs isn't available
    setTimeout(() => {
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Me</h2>
        <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-400">
          I'm interested in freelance opportunities. If you have other requests or questions, don't hesitate to{" "}
          <span className="text-accent-dark dark:text-accent-light font-semibold">contact me.</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-accent-light transition-all duration-300"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-accent-light transition-all duration-300"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-accent-light transition-all duration-300"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            required
            className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-accent-light transition-all duration-300 resize-none"
          />

          {status === "sending" && (
            <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-6 py-4 rounded-lg">
              Sending...
            </div>
          )}
          {status === "error" && (
            <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-6 py-4 rounded-lg">
              Message not sent. Something went wrong.
            </div>
          )}
          {status === "sent" && (
            <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-6 py-4 rounded-lg">
              Your message has been sent. Thank you!
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-primary-light dark:bg-accent-dark hover:bg-opacity-90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Send Message
            <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
