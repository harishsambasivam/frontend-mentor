import { useContext } from "react";
import { FormHeader } from "../App";
import { PrimaryButton } from "../components/button";
import Input from "../components/input";
import { PageContext } from "../context/page";

export function StepOne() {
  const { page, setPage }: any = useContext(PageContext);

  const handleChange = () => {
    console.log("handleChange");
    setPage(page + 1);
  };

  return (
    <div className="w-8/12 h-full flex justify-center">
      <div className="w-10/12 h-full  flex flex-col p-4 gap-4">
        <FormHeader
          headingText="Personal info"
          helperText="Please provide your name, email address, and phone number."
        />
        <div id="step1-form" className="flex flex-col gap-4">
          <Input
            name="name"
            type="text"
            placeholder="e.g. Stephen King"
            label="Name"
          />
          <Input
            name="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            label="Email Address"
          />
          <Input
            name="phone"
            type="text"
            placeholder="e.g. +1 234 567 890"
            label="Phone Number"
          />
        </div>

        <div id="navigation-btn-group" className="mt-auto ml-auto">
          <PrimaryButton text="Next Step" onClick={handleChange} />
        </div>
      </div>
    </div>
  );
}
