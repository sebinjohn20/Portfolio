import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import AOS from "aos";
import ChatRoom from "./components/ChatRoom";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <ShinyText
                text="Hi I'm Sebin John"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h1>
            <BlurText
              text="A results-driven Full Stack Developer with hands-on experience building scalable web applications using Python, Django, and the MERN Stack. Passionate about crafting modern, high-performance digital experiences through clean code and user-friendly design."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="./assets/CV.pdf"
                download="Sebin_John_CV.pdf"
                className="font-semibold bg-[#1a1a1a] p-3 px-5 sm:p-4 sm:px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors text-sm sm:text-base"
              >
                <ShinyText
                  text="Download CV"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>

              <a
                href="#project"
                className="font-semibold bg-[#1a1a1a] p-3 px-5 sm:p-4 sm:px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors text-sm sm:text-base"
              >
                <ShinyText
                  text="Explore My Projects"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>
            </div>
          </div>
        </div>
        {/* tentang */}
        <div
          className="mt-16 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6"
          id="about"
        >
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-4 sm:px-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 ">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="I'm Sebin John, a Full Stack Developer from Kerala, India, passionate about building scalable, high-performance web applications. I work with Python, Django, the MERN Stack, and React.js. With experience across data engineering, backend APIs, and responsive UIs, I bring a full-cycle approach to every project — from analysis to deployment. Immediate joiner, driven to create meaningful digital impact."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      30<span className="text-violet-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      1<span className="text-violet-500">+</span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                    data-aos-once="true"
                  >
                    <h1 className="text-3xl md:text-4xl mb-1">
                      MCA<span className="text-violet-500">/BCA</span>
                    </h1>
                    <p>Education</p>
                  </div>
                </div>

                <ShinyText
                  text="Code with purpose, ship with precision."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools & Technologies
          </h1>
          <p
            className="w-full sm:w-3/5 md:w-2/5 text-sm sm:text-base leading-loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            My Profesional Skills
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Experience */}
        <div className="experience mt-32">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Experience
          </h1>
          <p
            className="w-full sm:w-3/5 md:w-2/5 text-sm sm:text-base leading-loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            My Professional Journey
          </p>

          <div className="relative mt-14 pl-8 before:absolute before:left-[5px] before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-violet-600 before:via-cyan-500 before:to-violet-600/20 before:rounded-full">
            {/* Card 1 */}
            {[
              {
                title: "Full Stack Developer Intern (MERN)",
                company: "Vonnue Innovations Pvt. Ltd.",
                location: "Kerala, India",
                period: "Jun 2025 – Mar 2026",
                current: false,
                delay: "0",
                points: [
                  "Enhanced 10+ responsive frontend components using React.js, Tailwind CSS, and JavaScript, improving page load consistency.",
                  "Built and maintained RESTful backend APIs using Node.js and Express.js, supporting full CRUD operations.",
                  "Integrated MongoDB for data storage and retrieval, streamlining query performance for dynamic content rendering.",
                  "Applied component-based architecture in React.js, reducing code duplication by ~30% across shared UI modules.",
                ],
                tags: [
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Tailwind CSS",
                ],
              },
              {
                title: "Software Developer",
                company: "Oxicodes Infosolutions LLP",
                location: "Kerala, India",
                period: "Oct 2023 – Nov 2024",
                current: false,
                delay: "200",
                points: [
                  "Collected, cleaned, and processed datasets from multiple sources, improving data accuracy by 25%.",
                  "Performed data analysis and visualization using Pandas, NumPy, Matplotlib, and Seaborn.",
                  "Expanded 15+ reusable Python automation scripts, reducing manual processing time by 40%.",
                  "Improved data pipelines, cutting average processing time by 35% through query and script restructuring.",
                ],
                tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
              },
              {
                title: "Python Developer Intern",
                company: "Inmakes Infotech Pvt. Ltd.",
                location: "Kerala, India",
                period: "Jul 2023 – Sep 2023",
                current: false,
                delay: "400",
                points: [
                  "Improved backend services using Python, Django, and Flask, supporting 3 live web application features.",
                  "Created and integrated RESTful APIs consumed by React.js frontend for auth and data retrieval.",
                  "Built responsive UIs using HTML, CSS, JavaScript, and Bootstrap with cross-browser compatibility.",
                  "Executed JWT-based authentication and CRUD operations, reducing auth bug reports by 20%.",
                ],
                tags: ["Python", "Django", "Flask", "REST API", "MySQL", "JWT"],
              },
            ].map((exp, i) => (
              <div
                key={i}
                className="relative mb-8 bg-zinc-900/60 border border-violet-500/20 rounded-xl p-5 backdrop-blur-md hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 before:absolute before:-left-[1.9rem] before:top-5 before:w-3 before:h-3 before:rounded-full before:bg-violet-600 before:border-2 before:border-zinc-950 before:shadow-[0_0_8px_rgba(139,92,246,0.6)]"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={exp.delay}
                data-aos-once="true"
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h3 className="text-base font-bold text-white">
                    {exp.title}
                  </h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${
                      exp.current
                        ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-400"
                        : "bg-violet-500/10 border-violet-500/30 text-violet-400"
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-violet-400 mb-3">
                  {exp.company}{" "}
                  <span className="text-zinc-500">• {exp.location}</span>
                </p>
                <ul className="flex flex-col gap-1.5 mb-4">
                  {exp.points.map((pt, j) => (
                    <li
                      key={j}
                      className="text-sm text-zinc-400 pl-4 relative before:absolute before:left-0 before:top-[0.5em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-violet-600/60"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-zinc-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Experience */}
        <div
          className="proyek mt-32 py-10"
          id="project"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        ></div>
        <h1
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Showcasing a selection of projects that reflect my skills, creativity,
          and passion for building meaningful digital experiences.
        </p>
        <div className="proyek-box mt-14">
          <div
            style={{ height: "auto", position: "relative" }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* Proyek */}

        {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          {/* Container dua kolom */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Form di kanan */}
            <div className="flex-1">
              <form
                action="https://formsubmit.co/sebinjohn20@gmail.com"
                method="POST"
                className="bg-zinc-800 p-5 sm:p-8 md:p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText
                        text="Send"
                        disabled={false}
                        speed={3}
                        className="custom-class"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;
