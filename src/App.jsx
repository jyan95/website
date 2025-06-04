import React, { useState, useEffect } from 'react';

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
                  bg-gray-800 dark:bg-gray-950 rounded-lg shadow-lg p-6 sm:p-8 md:p-10 {/* Reverted to uniform padding */}
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
      className="p-2 rounded-full
                 bg-gray-700 hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700
                 text-green-400 dark:text-cyan-400
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
  // State to manage dark mode. Reads from localStorage.
  const [isDarkMode, setIsDarkMode] = useState(() => {
    console.log(localStorage)
    const savedMode = localStorage.getItem('theme');
    // If a preference is saved, use it. Otherwise, default to system preference.
    return savedMode && savedMode === 'dark' 
  });

  // Effect to apply/remove 'dark' class to the document's html element
  useEffect(() => {
    const htmlElement = document.documentElement;

    // Ensure htmlElement and classList are available before trying to modify
    if (!htmlElement || !htmlElement.classList) {
      console.error("Error: document.documentElement or its classList is not available.");
      return;
    }

    // Apply or remove the 'dark' class
    if (isDarkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

  }, [isDarkMode]); // Runs when isDarkMode state changes

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center font-mono
                    bg-gray-900 text-green-400
                    dark:bg-black dark:text-cyan-400
                    transition-colors duration-300 ease-in-out
                    p-4 sm:p-8 md:p-12"> {/* Outer padding remains */}
      <TerminalScreen>
        <TerminalHeader toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

        <PromptLine command="whoami" />
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-green-300 dark:text-cyan-300">Joshua Yan</h1>
        <p className="text-lg sm:text-xl text-green-400 dark:text-cyan-400 mb-6">
          builder, swimmer, climber, pianist.
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
          <ul className="list-none text-base sm:text-md space-y-1">
            <ListItem>
              <a href="https://kinetik.care/product/trip-scheduler"  target="_blank" className={terminalLinkClasses}>A trip scheduling platform for health systems</a>
            </ListItem>
            <ListItem>
               <a href="https://kinetik.care/product/trip-assistant"  target="_blank" className={terminalLinkClasses}>A trip dispatch platform for transportation networks</a>
            </ListItem>
            <ListItem>
              <a href="https://kinetik.care/product/revenue-cycle-management"  target="_blank" className={terminalLinkClasses}>A claims management platform for transportation providers</a>
            </ListItem>
          </ul>
        </div>

        <PromptLine command="cat management_philosophy.md" />
        <div>
          <p className="text-base sm:text-sm leading-relaxed">
             "To command is to serve, nothing more and nothing less."
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
