import { RevealOnScroll } from "../RevealOnScroll";

export const Achievements = () => {
  const certifications = [
    {
      title: "MERN Full-Stack Development",
      issuer: "Ethnus",
      year: "2024",
    },
    {
      title: "Oracle Cloud Infrastructure – Foundations Associate",
      issuer: "Oracle",
      year: "2024",
    },
    {
      title: "Oracle Generative AI Professional",
      issuer: "Oracle",
      year: "2025",
    },
    {
      title: "AWS Academy Graduate – Cloud Foundations",
      issuer: "Amazon Web Services (AWS Academy)",
      year: "2024",
    },
  ];

  const problemSolving = [
    {
      platform: "LeetCode",
      stats: "200+ problems solved | Top 37.15% in Contests | 50 Days Badge",
      link: "https://leetcode.com/Nishu_kumari6/",
    },
    {
      platform: "Codeforces",
      stats: "Newbie (Just Started)",
      link: "https://codeforces.com/",
    },
    {
      platform: "CodeChef",
      stats: "Beginner (Exploring Competitive Programming)",
      link: "https://www.codechef.com/",
    },
  ];

  const otherAchievements = [
    "Student Coordinator – Run Raise Repeat nationwide event (NextGen Cloud Club)",
    "Web Development Team Member – NextGen Cloud Club (2024)",
    "Hackathon Finalist – Aerospanza Aviation Challenge (Top 10 teams nationwide)",
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent text-center">
            Achievements & Certifications
          </h2>

          {/* Certifications */}
          <div className="rounded-xl p-6 border border-gray-200 hover:border-purple-400/50 hover:shadow-lg transition mb-8 bg-white/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-purple-600">
              📜 Certifications
            </h3>
            <ul className="space-y-3 text-gray-800">
              {certifications.map((cert, idx) => (
                <li key={idx}>
                  <strong>{cert.title}</strong> — {cert.issuer} ({cert.year})
                </li>
              ))}
            </ul>
          </div>

          {/* Problem Solving */}
          <div className="rounded-xl p-6 border border-gray-200 hover:border-pink-400/50 hover:shadow-lg transition bg-white/50 backdrop-blur-sm mb-8">
            <h3 className="text-xl font-bold mb-4 text-pink-600">
              💻 Problem Solving
            </h3>
            <ul className="space-y-3 text-gray-800">
              {problemSolving.map((ps, idx) => (
                <li key={idx}>
                  <a
                    href={ps.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-pink-500 transition"
                  >
                    {ps.platform}
                  </a>{" "}
                  — {ps.stats}
                </li>
              ))}
            </ul>
          </div>

          {/* Other Achievements */}
          <div className="rounded-xl p-6 border border-gray-200 hover:border-blue-400/50 hover:shadow-lg transition bg-white/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-blue-600">
              🏆 Other Achievements
            </h3>
            <ul className="space-y-3 text-gray-800 list-disc list-inside">
              {otherAchievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
