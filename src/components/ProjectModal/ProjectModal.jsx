import React, { useState, useEffect } from "react";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-zinc-900 border border-violet-500/50 rounded-2xl shadow-2xl shadow-violet-500/20 w-full max-w-lg max-h-[90vh] overflow-y-auto transform transition-transform duration-300 ${isClosing ? "animate-out" : "animate-in"}`}
      >
        {/* Project Image with close button overlaid */}
        <div className="sticky top-0 z-10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover rounded-t-2xl"
          />
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/80 transition-colors p-1.5 rounded-full backdrop-blur-sm"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>

          {/* Full Description */}
          <p className="text-zinc-300 text-base leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Two Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            {/* Source Code Button — always shown */}
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-semibold bg-zinc-800 p-3 px-5 rounded-full w-full cursor-pointer border border-zinc-600 hover:bg-zinc-700 hover:border-zinc-500 transition-colors"
            >
              <FiGithub size={18} />
              <span>Source Code</span>
            </a>

            {/* Visit Website Button — only shown if url exists */}
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold bg-violet-600 p-3 px-5 rounded-full w-full cursor-pointer border border-transparent hover:bg-violet-700 transition-colors"
              >
                <FiExternalLink size={18} />
                <span>Visit Website</span>
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center justify-center gap-2 font-semibold bg-zinc-800/50 p-3 px-5 rounded-full w-full border border-zinc-700/50 text-zinc-500 cursor-not-allowed"
              >
                <FiExternalLink size={18} />
                <span>Coming Soon</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
        @keyframes scaleOut {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.95); opacity: 0; }
        }
        .animate-out {
          animation: scaleOut 0.3s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
