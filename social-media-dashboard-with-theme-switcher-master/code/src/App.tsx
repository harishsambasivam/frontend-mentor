import { ReactNode } from "react";
import "./App.css";
import facebookIcon from "./assets/images/icon-facebook.svg";

const FollowersCard: any = ({ handle, followers, difference }: any) => {
  return (
    <div className="flex flex-col items-center justify-around m-4 border-t-4 rounded-lg border-cyan-700 bg-slate-100 h-52 md:flex-grow">
      <div className="handle">
        <p className="font-semibold text-slate-600"> {handle}</p>
      </div>
      <div className="flex flex-col items-center justify-center counter ">
        <span className="text-4xl font-bold ">{followers}</span>
        <p className="text-xs font-light uppercase tracking-w">followers</p>
      </div>
      <div className="font-semibold difference text-primary-limeGreen">
        {difference} Today
      </div>
    </div>
  );
};

type ReactionCardProps = {
  title: string;
  count: number;
  icon: string;
  stat: number;
};

const ReactionCard = ({ title, count, icon, stat }: ReactionCardProps) => {
  return (
    <div className="flex items-center h-32 p-5 bg-slate-50">
      <div className="flex flex-col justify-between h-full">
        <p className="font-semibold text-slate-600">{title}</p>
        <span className="text-2xl font-bold">{count}</span>
      </div>
      <div className="flex flex-col justify-between h-full ml-auto">
        <div className="logo">
          <img src={icon} className="w-5 h-5" />
        </div>
        <div className="text-xs font-semibold stats text-primary-limeGreen">
          {stat}%
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="w-screen min-h-screen">
      {/* top card */}
      <div className="flex flex-col h-64 p-4 top-card bg-slate-50 rounded-b-2xl md:rounded-none md:flex-row md:justify-center">
        <div className="p-4 border-b-2 md:border-none">
          <div className="text-2xl font-bold heading text-slate-800">
            Social Media Dashboard
          </div>
          <div className="font-semibold followers-count text-slate-500">
            Total Followers: 23,004
          </div>
        </div>
        <div className="p-4 font-bold md:ml-auto text-slate-500">Dark Mode</div>
      </div>
      {/* followers cards */}
      <div className="flex flex-col m-4 -mt-20 md:flex-row md:-mt-40">
        <FollowersCard handle="@nathanf" followers={1987} difference={12} />
        <FollowersCard handle="@nathanf" followers={1987} difference={12} />
        <FollowersCard handle="@nathanf" followers={1987} difference={12} />
        <FollowersCard handle="@nathanf" followers={1987} difference={12} />
      </div>

      {/* reactions */}
      <div>
        <div className="p-4 m-4">
          <p className="text-lg font-bold heading text-slate-500">
            Overview - Today
          </p>
          <div className="grid gap-4 mt-4 cards md:grid-cols-4">
            <ReactionCard
              count={100}
              icon={facebookIcon}
              title="Page Views"
              stat={87}
            />
            <ReactionCard
              count={100}
              icon={facebookIcon}
              title="Page Views"
              stat={87}
            />
            <ReactionCard
              count={100}
              icon={facebookIcon}
              title="Page Views"
              stat={87}
            />
            <ReactionCard
              count={100}
              icon={facebookIcon}
              title="Page Views"
              stat={87}
            />
            <ReactionCard
              count={100}
              icon={facebookIcon}
              title="Page Views"
              stat={87}
            />
            <ReactionCard
              count={100}
              icon={facebookIcon}
              title="Page Views"
              stat={87}
            />
            <ReactionCard
              count={100}
              icon={facebookIcon}
              title="Page Views"
              stat={87}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
