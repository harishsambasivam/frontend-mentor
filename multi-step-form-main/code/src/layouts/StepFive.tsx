import successLogo from "../assets/images/icon-thank-you.svg";

export function StepFive() {
  return (
    <div className="flex flex-col items-center justify-center w-8/12">
      <div className="flex flex-col items-center justify-center w-3/4 gap-8">
        <img src={successLogo} className="w-20 h-20" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-3xl font-bold">Thank you!</p>
          <p className="text-slate-400">
            {" "}
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  );
}
