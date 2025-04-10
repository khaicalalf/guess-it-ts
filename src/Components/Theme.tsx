import { useState } from "react";
import GuessIt from "./GuessIt";
import hand from "../assets/image/hand.png";
import water from "../assets/image/water.png";

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
    if ((e.target as HTMLElement).closest(".card")) {
      return; // Batalin klik kalau berasal dari dalam .card
    } else {
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
          <div className="text-center w-full flex-grow flex justify-center pt-10">
            <div className="relative flex items-center justify-center">
              <img src={water} alt="water" className="waves w-48 h-auto" />
              <img
                src={hand}
                alt="hand"
                className="floating-hand absolute top-1/2 left-1/2 w-12 h-auto -translate-x-1/2 -translate-y-1/2 z-10"
              />
            </div>
          </div>
          <div className="text-center w-full flex-grow flex justify-center">
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
