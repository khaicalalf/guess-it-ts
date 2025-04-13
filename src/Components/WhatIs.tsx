import "../index.css";

const WhatIs = () => {
  return (
    <>
      <div className="drawer drawer-end">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="unclickabled drawer-toggle"
        />
        <div className="drawer-content unclickabled">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button">
            What is this?
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="menu bg-base-200 text-base-content h-full w-80 justify-center items-end overflow-hidden md:w-150">
            <div className="w-1/2 h-full flex flex-grow flex-row justify-center items-end overflow-hidden md:w-1/3">
              {Array.from({ length: 6 }, (_, colIndex) =>
                colIndex % 2 === 0 ? (
                  <div key={colIndex} className="flex flex-col">
                    {Array.from({ length: 3 }, (_, rowIndex) => (
                      <div
                        key={rowIndex}
                        className={`square bg-blur md:square-lg ${
                          (Math.floor(rowIndex / 3) + rowIndex) % 2 === 0
                            ? "bg-base-300 square-animation"
                            : "bg-base-200"
                        }`}
                      ></div>
                    ))}
                  </div>
                ) : (
                  <div key={colIndex} className="flex flex-col">
                    {Array.from({ length: 2 }, (_, rowIndex) => (
                      <div
                        key={rowIndex}
                        className={`square bg-blur md:square-lg  ${
                          (Math.floor(rowIndex / 2) + rowIndex) % 2 === 0
                            ? "bg-base-300 square-animation"
                            : "bg-base-200"
                        }`}
                      ></div>
                    ))}
                  </div>
                )
              )}
            </div>
            <div className="unclickabled px-4 chat chat-start absolute z-2">
              <div className="chat-bubble text-left bg-base-100">
                <ul className="list">
                  <li className="list-row">
                    <div className="text-xl font-thin opacity-40 tabular-nums">
                      ✨
                    </div>
                    <p className="text-l font-semibold">
                      there is no members were harmed in the develop, ✌️.
                    </p>
                  </li>
                  <li className="list-row">
                    <div className="text-xl font-thin opacity-40 tabular-nums">
                      🎈
                    </div>
                    <p className="text-l font-semibold">
                      all photo originally from the member's sns.
                    </p>
                  </li>
                  <li className="list-row">
                    <div className="text-xl font-thin opacity-40 tabular-nums">
                      🎗️ forgive me if there is a mistake in writing the name.
                    </div>
                    <p className="text-l font-semibold">
                      all photo originally from the member's sns.
                    </p>
                  </li>
                  <li className="list-row">
                    <div className="text-xl font-thin opacity-40 tabular-nums">
                      🪭
                    </div>
                    <p className="text-l font-semibold">
                      I just want to have fun developing a react portfolio
                      project with daisyUI.
                    </p>
                  </li>
                  <li className="list-row">
                    <div className="text-xl font-thin opacity-40 tabular-nums">
                      🎡
                    </div>
                    <p className="text-l font-semibold">
                      and don't forget to try clicking your screen randomly and
                      see what happens 😉.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIs;
