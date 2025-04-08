import { useState } from "react";
import GuessIt from "./GuessIt";

const themes = [
  "light",
  "abyss",
  "cupcake",
  "valentine",
  "dracula",
  "cyberpunk",
];

const Theme = () => {
  const [randomTheme, setRandomTheme] = useState("abyss");

  const setTheme = (randomTheme: string) => {
    document.documentElement.setAttribute("data-theme", randomTheme);
  };

  const handleRandomTheme = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      const randomThemes = themes[Math.floor(Math.random() * themes.length)];
      if (randomTheme === randomThemes) {
        const randomUnsameTheme = themes.filter(
          (theme) => theme !== randomThemes
        )[Math.floor(Math.random() * (themes.length - 1))];
        setRandomTheme(randomUnsameTheme);
        setTheme(randomTheme);
        console.log("random theme1", randomUnsameTheme);
        return;
      } else {
        setRandomTheme(randomThemes);
        setTheme(randomTheme);
      }
    }
  };
  console.log("random theme", randomTheme);

  return (
    <>
      <div className="bg-base-200 min-h-screen" onClick={handleRandomTheme}>
        <div className="mockup-window bg-base-200 flex flex-col">
          <div className="hero text-center w-full flex-grow flex items-start justify-center pt-10">
            <div className="card bg-base-100 shadow-sm w-full p-5 m-5 max-w-lg">
              <GuessIt />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Theme;
