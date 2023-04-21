import { useState } from "react";

export function PricingPlan({ name, group, icon, plan, pricing }: any) {
  return (
    <div className="h-44 w-36 rounded-xl">
      <input
        type="radio"
        name={group}
        id={name}
        className="hidden peer"
        onClick={() => console.log("clicked")}
      />
      <label
        htmlFor={name}
        className="block h-full p-4 border cursor-pointer border-slate-200 peer-checked:bg-blue-50 peer-checked:border-blue-600 rounded-xl"
      >
        <div className="flex flex-col h-full">
          <div>
            <img src={icon} className="w-10 h-10" />
          </div>
          <div className="mt-auto">
            <div className="font-medium">{plan}</div>
            <div className="text-sm text-slate-400">{pricing}</div>
          </div>
        </div>
      </label>
    </div>
  );
}

export function PricingPlanCheckbox() {
  const [monthly, setMonthly] = useState<boolean>(true);

  const handleChange = () => {
    setMonthly(!monthly);
  };

  return (
    <div className="flex items-center justify-center w-full gap-4 p-4 rounded-lg bg-slate-100 group">
      <span
        className={`${
          monthly ? "text-slate-900" : "text-slate-400"
        } text-sm font-medium`}
      >
        Monthly
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onClick={handleChange}
          checked={!monthly}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none hover:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
      </label>
      <span
        className={` ${
          !monthly ? "text-slate-900" : "text-slate-400"
        } text-sm font-medium`}
      >
        Yearly
      </span>
    </div>
  );
}

export function AddonCard({ name, service, desc, price }: any) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="border border-blue-300 rounded bg-slate-50 ">
      <input
        type="checkbox"
        id={name}
        name={`dup-${name}`}
        checked={checked}
        className="hidden bg-pink-700 peer"
        onClick={handleChange}
      />
      <label
        htmlFor={name}
        className="flex w-full p-4 rounded peer bg-slate-200 hover:cursor-pointer hover:bg-blue-50"
      >
        <div className="flex items-center w-full gap-4 ">
          <input
            type="checkbox"
            name={`${name}`}
            checked={checked}
            onChange={handleChange}
          />
          <div>
            <p className="font-medium text-slate-700">{service}</p>
            <p className="text-sm text-slate-400">{desc}</p>
          </div>
          <p className="ml-auto text-sm text-blue-600 ">{price}</p>
        </div>
      </label>
    </div>
  );
}
