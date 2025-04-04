import "./index.css";
import GuessIt from "./GuessIt";

function App() {
  return (
    <>
      <div className="mockup-browser bg-base-200 min-h-screen flex flex-col">
        <div className="hero text-center w-full flex-grow flex items-start justify-center pt-10">
          <div className="card bg-base-100 shadow-sm w-full p-5 m-5 max-w-lg">
            <GuessIt />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
