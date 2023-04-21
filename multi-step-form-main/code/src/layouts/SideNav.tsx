import { useContext } from "react";
import { PageContext } from "../context/page";

function StepLink({ stepNumber, stepTitle, stepInfo, active }: any) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={` ${
          active
            ? "bg-blue-200 text-slate-700 border-blue-200"
            : "text-slate-200 border-slate-300"
        } w-10 h-10 font-semibold rounded-full grid place-items-center border-2 `}
      >
        {" "}
        {stepNumber}{" "}
      </div>
      <div>
        <p className="text-sm font-thin tracking-wider uppercase text-slate-400">
          {stepTitle}
        </p>
        <p className="font-semibold tracking-widest uppercase text-slate-200">
          {stepInfo}
        </p>
      </div>
    </div>
  );
}

export function SideNav() {
  const { page }: any = useContext(PageContext);

  return (
    <div
      id="sidenav"
      className="flex flex-col w-4/12 h-full gap-6 p-8 bg-cover rounded-xl bg-pink-50 bg-sidenav-desktop"
    >
      <StepLink
        active={page === 1}
        stepNumber={1}
        stepTitle={"step 1"}
        stepInfo={"your info"}
      />
      <StepLink
        active={page === 2}
        stepNumber={2}
        stepTitle={"step 2"}
        stepInfo={"select plan"}
      />
      <StepLink
        active={page === 3}
        stepNumber={3}
        stepTitle={"step 3"}
        stepInfo={"add-ons"}
      />
      <StepLink
        active={page === 4 || page === 5}
        stepNumber={4}
        stepTitle={"step 4"}
        stepInfo={"summary"}
      />
    </div>
  );
}
