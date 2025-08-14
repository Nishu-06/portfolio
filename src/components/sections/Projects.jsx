import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-pink-50 to-blue-50"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Chat With PDFs */}
            <div className="p-6 rounded-xl bg-white border border-pink-200 shadow hover:-translate-y-1 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Chat With PDFs</h3>
              <p className="text-gray-600 mb-4">
                A chatbot website to upload PDFs and ask context-aware questions using AI.
                Integrated Supabase Auth for secure login and Ollama API for accurate responses.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "Supabase", "Ollama API", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-100 text-pink-600 py-1 px-3 rounded-full text-sm hover:bg-pink-200 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/Nishu-06/PDF-ChatBot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-colors my-4"
              >
                View Project →
              </a>
            </div>

            {/* Learning Management System */}
            <div className="p-6 rounded-xl bg-white border border-pink-200 shadow hover:-translate-y-1 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Learning Management System</h3>
              <p className="text-gray-600 mb-4">
                MERN-based LMS with course creation, student enrollment, and role-based access.
                Built responsive frontend and secure backend APIs for efficient management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "Express.js", "React", "Node.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-100 text-pink-600 py-1 px-3 rounded-full text-sm hover:bg-pink-200 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/Nishu-06/learning_management_system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-colors my-4"
              >
                View Project →
              </a>
            </div>

            {/* Fictional Tech Conference */}
            <div className="p-6 rounded-xl bg-white border border-pink-200 shadow hover:-translate-y-1 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Fictional Tech Conference</h3>
              <p className="text-gray-600 mb-4">
                Responsive and modern tech conference site built with SvelteKit and Sveltestrap.
                Integrated Google Form for attendee registration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["SvelteKit", "Sveltestrap", "JavaScript", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-100 text-pink-600 py-1 px-3 rounded-full text-sm hover:bg-pink-200 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/Nishu-06/Fictional-tech-conference"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-colors my-4"
              >
                View Project →
              </a>
            </div>

            {/* EcoSmart */}
            <div className="p-6 rounded-xl bg-white border border-pink-200 shadow hover:-translate-y-1 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-gray-800">EcoSmart</h3>
              <p className="text-gray-600 mb-4">
                Sustainable e-commerce platform with carbon calculator and real-time cart updates.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "Express.js", "React", "Node.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-100 text-pink-600 py-1 px-3 rounded-full text-sm hover:bg-pink-200 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/Nishu-06/EcoSmart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-colors my-4"
              >
                View Project →
              </a>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
