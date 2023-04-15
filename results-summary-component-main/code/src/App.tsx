import memoryIcon from "./assets/images/icon-memory.svg";
import reactionIcon from "./assets/images/icon-reaction.svg";
import visualIcon from "./assets/images/icon-visual.svg";
import verbalIcon from "./assets/images/icon-verbal.svg";
import "./App.css";

function App() {
  return (
    <div className="w-screen min-h-screen md:flex md:items-center md:justify-center font-hanken">
      <div className="flex flex-col w-screen md:shadow-xl md:flex-row md:w-6/12 md:rounded-2xl">
        <div className="grid gap-2 p-8 text-white capitalize md:gap-0 md:w-1/2 rounded-b-2xl md:rounded-2xl place-items-center bg-gradient-to-b from-violetblue-400 to-cobaltblue-500">
          <p className="text-3xl text-violetblue-50 font-weight-500">
            Your Result
          </p>
          <div className="flex flex-col items-center justify-center gap-2 leading-3 rounded-full shadow-sm w-36 h-36 bg-gradient-to-b from-violetblue-600 to-cobaltblue-300">
            <span className="text-6xl font-weight-700">76</span>
            <p className="opacity-60 text-violetblue-50 font-weight-400">
              of 100
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 text-center md:gap-2">
            <p className="text-3xl">Great</p>
            <p className="text-violetblue-50">
              {" "}
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 p-8 md:w-1/2">
          <p className="text-3xl font-weight-500">Summary</p>
          <div className="flex flex-col w-full gap-4 font-weight-500">
            <div className="flex w-full p-4 rounded-lg bg-lightred-50 ">
              <span className="flex items-center justify-center gap-1 text-lightred-300 ">
                <img src={reactionIcon} className="w-5 h-5" />
                Reaction
              </span>
              <span className="ml-auto">
                <span className="font-semibold text-slate-700">80</span>{" "}
                <span className="text-slate-500">/ 100</span>
              </span>
            </div>

            <div className="flex w-full p-4 rounded-lg bg-orangeyyellow-50">
              <span className="flex items-center justify-center gap-1 text-orangeyyellow-300 ">
                <img src={memoryIcon} className="w-5 h-5" />
                Memory
              </span>
              <span className="ml-auto">
                <span className="font-semibold text-slate-700">92</span>{" "}
                <span className="text-slate-500"> / 100</span>
              </span>
            </div>

            <div className="flex w-full p-4 rounded-lg bg-greenteal-50">
              <span className="flex items-center justify-center gap-1 text-greenteal-500 ">
                <img src={verbalIcon} className="w-5 h-5" />
                Verbal
              </span>
              <span className="ml-auto">
                <span className="font-semibold text-slate-700">61</span>{" "}
                <span className="text-slate-500">/ 100</span>
              </span>
            </div>

            <div className="flex w-full p-4 rounded-lg bg-cobaltblue-50">
              <span className="flex items-center justify-center gap-1 text-cobaltblue-300 ">
                <img src={visualIcon} className="w-5 h-5" />
                Visual
              </span>
              <span className="ml-auto">
                <span className="font-semibold text-slate-700">72</span>{" "}
                <span className="text-slate-500">/ 100</span>
              </span>
            </div>
          </div>

          <button className="w-full py-3 text-white bg-grayblue-900 rounded-3xl">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
