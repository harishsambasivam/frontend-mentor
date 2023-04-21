import { useState } from "react";
import { StepOne } from "./layouts/StepOne";
import { StepTwo } from "./layouts/StepTwo";
import { SideNav } from "./layouts/SideNav";
import { PageContext } from "./context/page";
import { StepThree } from "./layouts/StepThree";
import { StepFour } from "./layouts/StepFour";
import { StepFive } from "./layouts/StepFive";

export function FormHeader({ headingText, helperText }: any) {
  return (
    <div id="header" className="flex flex-col gap-2">
      <p className="text-slate-800 text-4xl font-bold">{headingText}</p>
      <p className="text-slate-400">{helperText}</p>
    </div>
  );
}

function App() {
  const [page, setPage] = useState<any>(1);

  const setContextPage = (page: any) => {
    setPage(page);
    console.log("updated page");
  };

  return (
    <PageContext.Provider value={{ page, setPage: setContextPage }}>
      <div className="font-ubuntu bg-slate-100 h-screen w-screen grid place-items-center">
        <div
          id="app"
          className="bg-white h-[75vh] w-[70vw] p-4 rounded-xl flex"
        >
          <SideNav />
          {page === 1 && <StepOne />}
          {page === 2 && <StepTwo />}
          {page === 3 && <StepThree />}
          {page === 4 && <StepFour />}
          {page === 5 && <StepFive />}
        </div>
      </div>
    </PageContext.Provider>
  );
}

export default App;
