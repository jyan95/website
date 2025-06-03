import React, { useState, useEffect } from 'react';

// --- SVG Icons ---
const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-sun"
  >
    <circle cx="12" cy="12" r="8" />
    <line x1="12" x2="12" y1="2" y2="6" />
    <line x1="12" x2="12" y1="18" y2="22" />
    <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
    <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
    <line x1="2" x2="6" y1="12" y2="12" />
    <line x1="18" x2="22" y1="12" y2="12" />
    <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
    <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-moon"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const TerminalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-terminal"
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </svg>
);

const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-code"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-mail"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-linkedin"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


// --- Reusable Styled Components ---

const TerminalScreen = ({ children }) => (
  <div className="w-full max-w-full
                  bg-gray-800 dark:bg-gray-950 rounded-lg shadow-lg p-6 sm:p-8 md:p-10
                  ring-2 ring-green-500 dark:ring-cyan-500
                  transition-colors duration-300 ease-in-out
                  overflow-hidden">
    {children}
  </div>
);

const TerminalHeader = ({ toggleDarkMode, isDarkMode }) => (
  <div className="flex justify-between items-center mb-6 text-sm">
    <div className="flex space-x-2">
      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
      <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
    </div>
    <span className="text-gray-400">joshua@terminal:~$</span>
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-700 dark:bg-gray-800
                 text-green-400 dark:text-cyan-400
                 hover:bg-gray-600 dark:hover:bg-gray-700
                 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-cyan-500
                 transition-colors duration-300 ease-in-out"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <TerminalIcon /> : <CodeIcon />}
    </button>
  </div>
);

const PromptLine = ({ command, children }) => (
  <p className="mb-2">
    <span className="text-green-500 dark:text-cyan-500 font-bold">$</span>{" "}
    <span className="animate-pulse">{command}</span>
    {children} {/* For the blinking cursor at the end */}
  </p>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-green-300 dark:text-cyan-300">
    {children}
  </h2>
);

const terminalLinkClasses = "text-blue-400 hover:underline hover:text-white dark:text-blue-300 dark:hover:underline dark:hover:text-white transition-colors duration-200";

const ListItem = ({ children }) => (
  <li>
    <span className="text-green-500 dark:text-cyan-500 font-bold">--</span> {children}
  </li>
);

const TerminalFooter = () => (
  <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-700 dark:border-gray-800 text-sm">
    {/* Left Aligned Element */}
    <div>
      <a
        href="https://drive.google.com/file/d/1vFmotEK31wMtvMez96aF1V3MUfqCUIzu/view"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 hover:underline hover:text-white dark:text-cyan-400 dark:hover:underline dark:hover:text-white transition-colors duration-200"
      >
        resume
      </a>
    </div>

    {/* Right Aligned Elements */}
    <div className="flex space-x-4">
      <a
        href="mailto:jyan0602@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 hover:text-white dark:text-cyan-400 dark:hover:text-white transition-colors duration-200"
        aria-label="Email Joshua Yan"
      >
        <MailIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/joshua-yan/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 hover:text-white dark:text-cyan-400 dark:hover:text-white transition-colors duration-200"
        aria-label="Joshua Yan's LinkedIn profile"
      >
        <LinkedinIcon />
      </a>
    </div>
  </div>
);


// --- Main App Component ---
function App() {
  // State to manage dark mode. Reads from localStorage on initial load.
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      return savedMode === 'dark';
    }
    // Default to system preference if no preference is saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Effect to dynamically load Tailwind CSS CDN
  useEffect(() => {
    const tailwindScriptId = 'tailwind-cdn-script';
    if (!document.getElementById(tailwindScriptId)) {
      const script = document.createElement('script');
      script.src = 'https://cdn.tailwindcss.com';
      script.id = tailwindScriptId;
      document.head.appendChild(script);
    }
  }, []); // Empty dependency array means this runs once on mount

  // Effect to apply/remove 'dark' class to the document's html element
  // and save preference to localStorage whenever isDarkMode changes.
  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 font-mono
                    bg-gray-900 text-green-400
                    dark:bg-black dark:text-cyan-400
                    transition-colors duration-300 ease-in-out">
      <TerminalScreen>
        <TerminalHeader toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

        <PromptLine command="whoami" />
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-green-300 dark:text-cyan-300">Joshua Yan</h1>
        <p className="text-lg sm:text-xl text-green-400 dark:text-cyan-400 mb-6">
          Builder, swimmer, pianist, climber.
        </p>

        <PromptLine command="cat current_role.txt" />
        <p className="text-base sm:text-lg leading-relaxed mb-6">
          Currently leading a team at{" "}
          <a
            href="https://kinetik.care/"
            target="_blank"
            rel="noopener noreferrer"
            className={terminalLinkClasses}
          >
            Kinetik
          </a>, designing and delivering software solutions for managed care transportation.
        </p>

        <PromptLine command="ls -l areas_of_work/" />
        <div className="mb-6">
          <SectionTitle>Areas of Work:</SectionTitle>
          <ul className="list-none text-base sm:text-lg space-y-1">
            <ListItem>Team management</ListItem>
            <ListItem>Project management</ListItem>
            <ListItem>System Design</ListItem>
            <ListItem>Code Review</ListItem>
            <ListItem>UI/UX, QA</ListItem>
          </ul>
        </div>

        <PromptLine command="git log --recent-projects" />
        <div className="mb-6">
          <SectionTitle>Recent Projects:</SectionTitle>
          <ul className="list-none text-base sm:text-lg space-y-1">
            <ListItem>
              <a href="https://kinetik.care/product/trip-scheduler" className={terminalLinkClasses}>A trip scheduling platform for health systems</a>
            </ListItem>
            <ListItem>
               <a href="https://kinetik.care/product/trip-assistant" className={terminalLinkClasses}>A trip dispatch platform for transportation networks</a>
            </ListItem>
            <ListItem>
              <a href="https://kinetik.care/product/revenue-cycle-management" className={terminalLinkClasses}>A claims management platform for transportation providers</a>
            </ListItem>
          </ul>
        </div>

        <PromptLine command="cat management_philosophy.md" />
        <div>
          {/* <SectionTitle>Management Philosophy:</SectionTitle> */}
          <p className="text-base sm:text-lg leading-relaxed">
            Embracing individuality and autonomy, personal growth lies at the forefront of my management philosophy. I empower team members to identify and leverage their unique strengths, cultivating ownership and initiative toward shared goals.
          </p>
        </div>
        <p className="mt-6 text-green-500 dark:text-cyan-500 font-bold">joshua@terminal:~$ <span className="animate-ping">_</span></p>

        {/* Add the new TerminalFooter component */}
        <TerminalFooter />
      </TerminalScreen>
    </div>
  );
}

export default App;
