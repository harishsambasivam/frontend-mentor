import { PricingPlan, PricingPlanCheckbox } from "../components/cards";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";
import { FormHeader } from "../App";
import { PrimaryButton, TextButton } from "../components/button";
import { useContext } from "react";
import { PageContext } from "../context/page";

export function StepTwo() {
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
          headingText="Select Your Plan"
          helperText="You have the option of monthly or yearly billing."
        />
        <div id="step1-form" className="flex flex-col gap-4">
          <div className="flex justify-between gap-4">
            <PricingPlan
              name="arcade"
              group="monthly"
              plan="Arcade"
              pricing="$9/mo"
              icon={iconArcade}
            />
            <PricingPlan
              name="advanced"
              group="monthly"
              plan="Advanced"
              pricing="$12/mo"
              icon={iconAdvanced}
            />
            <PricingPlan
              name="pro"
              group="monthly"
              plan="Pro"
              pricing="$15/mo"
              icon={iconPro}
            />
          </div>
          <div className="h-1/4">
            <PricingPlanCheckbox />
          </div>
        </div>
        <div id="navigation-btn-group" className="flex w-full mt-auto">
          <TextButton text="Go Back" onClick={prevPage} />
          <PrimaryButton text="Next Step" styles="ml-auto" onClick={nextPage} />
        </div>
      </div>
    </div>
  );
}
