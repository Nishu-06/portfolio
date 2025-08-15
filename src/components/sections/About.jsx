import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "TailwindCSS",
    "Bootstrap",
    "Svelte",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "Python",
    "AWS",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-pink-50 to-blue-50"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-pink-200 bg-white shadow-lg hover:-translate-y-1 transition-all">
            <p className="text-gray-700 mb-6">
              I’m a full-stack developer with a focus on MERN Stack, AI-powered
              applications, and crafting sustainable, user-friendly solutions.
              Proficient in Java, Python, JavaScript, and modern web
              technologies, I enjoy solving complex problems and building
              scalable applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 bg-pink-50 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-pink-600">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-100 text-pink-600 py-1 px-3 rounded-full text-sm hover:bg-pink-200 
                                    hover:shadow-[0_2px_8px_rgba(236,72,153,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 bg-pink-50 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-pink-600">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-100 text-pink-600 py-1 px-3 rounded-full text-sm hover:bg-pink-200 
                                    hover:shadow-[0_2px_8px_rgba(236,72,153,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-pink-200 bg-white shadow-md hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-pink-600">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>B.Tech in Computer Science Engineering</strong> -
                  Vellore Institute of Technology, AP (2022–2026) — CGPA: 8.63
                </li>
                <li>
                  Delhi Public School, BS City — 12th CBSE: 92.4%
                </li>
                <li>
                  Mount Carmel School, Bokaro Thermal — 10th ICSE: 91.8%
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-pink-200 bg-white shadow-md hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-pink-600">💼 Experience</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold">
                    Web Development Team Member — NextGen Cloud Club (2024)
                  </h4>
                  <p>
                    Contributed to web development projects and coordinated
                    nationwide event “Run Raise Repeat”.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Finalist — Aerospanza Aviation Challenge (2024)
                  </h4>
                  <p>
                    Collaborated in a team of 4, reaching top 10 nationwide in
                    an aviation-focused hackathon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
