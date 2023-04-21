import { useContext } from "react";
import { AddonCard } from "../components/cards";
import { PageContext } from "../context/page";
import { FormHeader } from "../App";
import { PrimaryButton, TextButton } from "../components/button";

export function StepThree() {
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
          <div className="flex flex-col justify-between gap-4">
            <AddonCard
              name="onlineService"
              service="Online service"
              desc="Access to multiplayer games"
              price="+$1/mo"
            />
            <AddonCard
              name="storage"
              service="Larger storage"
              desc="Extra 1TB of cloud save"
              price="+$2/mo"
            />
            <AddonCard
              name="customProfile"
              service="Customizable Profile"
              desc="Custom theme on your profile"
              price="+$2/mo"
            />
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
