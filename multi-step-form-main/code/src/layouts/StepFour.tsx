import { PricingPlan, PricingPlanCheckbox } from "../components/cards";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";
import { FormHeader } from "../App";
import { ConfirmButton, PrimaryButton, TextButton } from "../components/button";
import { useContext } from "react";
import { PageContext } from "../context/page";

export function StepFour() {
  const { page, setPage }: any = useContext(PageContext);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="flex justify-center w-8/12">
      <div className="flex flex-col w-10/12 gap-4 p-4">
        <FormHeader
          headingText="Finishing up"
          helperText="Double-check everything looks OK before confirming."
        />
        <div id="step1-form" className="flex flex-col gap-4 rounded">
          <div className="flex flex-col justify-between gap-4 p-4 rounded bg-slate-50">
            <div className="flex p-2 border-b border-b-slate-200">
              <div>
                <p className="font-semibold text-slate-600">Arcade (Monthly)</p>
                <button className="text-sm text-blue-600 underline hover:cursor-pointer hover:text-blue-500">
                  Change
                </button>
              </div>
              <p className="ml-auto font-semibold text-slate-600">$9/mo</p>
            </div>
            <div className="flex">
              <div>
                <p className="text-sm text-slate-400">Online service</p>
              </div>
              <p className="ml-auto text-sm text-slate-500">+$1/mo</p>
            </div>
            <div className="flex">
              <div>
                <p className="text-sm text-slate-400">Larger Storage</p>
              </div>
              <p className="ml-auto text-sm text-slate-500">+$2/mo</p>
            </div>
          </div>
          <div className="flex p-4 text-slate-400">
            <div>
              <p>Total (per month)</p>
            </div>
            <p className="ml-auto text-lg font-medium text-blue-800">
              + $12/mo
            </p>
          </div>
        </div>
        <div id="navigation-btn-group" className="flex w-full mt-auto">
          <TextButton text="Go Back" onClick={prevPage} />
          <ConfirmButton text="Confirm" styles="ml-auto" onClick={nextPage} />
        </div>
      </div>
    </div>
  );
}
