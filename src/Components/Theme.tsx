import { useState, useEffect } from "react";
import GuessIt from "./GuessIt";
import Footer from "./Footer";
import hand from "../assets/image/hand.png";
import water from "../assets/image/water.png";

const themes = [
  "light",
  "abyss",
  "cupcake",
  "valentine",
  "dracula",
  "cyberpunk",
  "forest",
  "winter",
  "caramellate",
];

const Theme = () => {
  const [randomTheme, setRandomTheme] = useState<string>(() => {
    // Cek localStorage saat pertama kali render
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", randomTheme);
    localStorage.setItem("theme", randomTheme);
  }, [randomTheme]);

  const setTheme = (randomTheme: string) => {
    document.documentElement.setAttribute("data-theme", randomTheme);
  };

  const handleRandomTheme = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest(".unclickabled")) {
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
      <div className="bg-base-200 ">
        <div className="mockup-window min-h-screen" onClick={handleRandomTheme}>
          <div className="bg-base-200 flex-col flex flex-grow">
            <div className="text-center w-full flex justify-center pt-10">
              <div className="relative flex items-center justify-center">
                <img src={water} alt="water" className="waves w-48 h-auto" />
                <img
                  src={hand}
                  alt="hand"
                  className="floating-hand absolute top-1/2 left-1/2 w-12 h-auto -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
            <div className="text-center w-full flex justify-center">
              <div className="unclickabled bg-base-100 shadow-sm w-full p-5 m-5 max-w-lg">
                <GuessIt />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Theme;
