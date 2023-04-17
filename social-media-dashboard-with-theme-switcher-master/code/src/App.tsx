import { ReactNode } from "react";
import "./App.css";
import facebookIcon from "./assets/images/icon-facebook.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";
import instagramIcon from "./assets/images/icon-instagram.svg";
import youtubeIcon from "./assets/images/icon-youtube.svg";
import downIcon from "./assets/images/icon-down.svg";
import upIcon from "./assets/images/icon-up.svg";

const FollowersCard: any = ({
  handle,
  followers,
  difference,
  borderStyles = "border-cyan-700",
  icon,
  followersText = "followers",
  countIncreased = true,
}: any) => {
  return (
    <div className={`${borderStyles} w-full h-52 m-4 md:flex-grow rounded-md`}>
      <div
        className={` flex flex-col items-center justify-around mt-1 rounded-md  bg-slate-100 h-56 md:flex-grow `}
      >
        <div className="flex items-center mt-2">
          <img src={icon} className="w-5 h-5" />
          <p className="ml-2 font-semibold text-slate-600"> {handle}</p>
        </div>
        <div className="flex flex-col items-center justify-center counter ">
          <span className="text-5xl font-bold ">{followers}</span>
          <p className="mt-1 text-xs font-light uppercase tracking-w">
            {followersText}
          </p>
        </div>
        <div
          className={`font-bold difference ${
            countIncreased ? "text-primary-limeGreen" : "text-primary-brightRed"
          } flex items-center gap-2`}
        >
          <img src={countIncreased ? upIcon : downIcon} className="w-2 h-1" />
          {difference} Today
        </div>
      </div>
    </div>
  );
};

type ReactionCardProps = {
  title: string;
  count: string;
  icon: string;
  deviationInPercent: number;
};

const ReactionCard = ({
  title,
  count,
  icon,
  deviationInPercent,
}: ReactionCardProps) => {
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
        <div
          className={`text-xs font-semibold stats ${
            deviationInPercent < 0
              ? "text-primary-brightRed"
              : "text-primary-limeGreen"
          } flex items-center gap-2`}
        >
          <img
            src={deviationInPercent < 0 ? downIcon : upIcon}
            className="w-2 h-1"
          />
          {deviationInPercent}%
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
          <div className="text-3xl font-bold heading text-slate-800">
            Social Media Dashboard
          </div>
          <div className="mt-1 text-sm font-semibold followers-count text-slate-500">
            Total Followers: 23,004
          </div>
        </div>
        <div className="p-4 font-bold md:ml-auto text-slate-500">Dark Mode</div>
      </div>
      {/* followers cards */}
      <div className="flex flex-col m-4 -mt-20 md:flex-row md:-mt-40">
        <FollowersCard
          handle="@nathanf"
          followers={1987}
          difference={12}
          borderStyles="bg-primary-facebook"
          icon={facebookIcon}
        />
        <FollowersCard
          handle="@nathanf"
          followers={1044}
          difference={99}
          borderStyles="bg-primary-twitter"
          icon={twitterIcon}
        />

        <FollowersCard
          handle="@realnathanf"
          followers={"11k"}
          difference={1099}
          borderStyles="bg-gradient-to-r from-primary-instagram-gradient-start to-primary-instagram-gradient-end"
          icon={instagramIcon}
        />
        <FollowersCard
          handle="@nathanf"
          followers={1987}
          difference={12}
          borderStyles="bg-primary-youtube"
          icon={youtubeIcon}
          followersText="subscribers"
          countIncreased={false}
        />
      </div>

      {/* reactions */}
      <div>
        <div className="p-4 m-4">
          <p className="text-lg font-bold heading text-slate-500">
            Overview - Today
          </p>
          <div className="grid gap-4 mt-4 cards md:grid-cols-4">
            <ReactionCard
              count={"100"}
              icon={facebookIcon}
              title="Page Views"
              deviationInPercent={3}
            />
            <ReactionCard
              count={"52"}
              icon={facebookIcon}
              title="Likes"
              deviationInPercent={2}
            />
            <ReactionCard
              count={"5462"}
              icon={instagramIcon}
              title="Likes"
              deviationInPercent={2257}
            />

            <ReactionCard
              count={"52k"}
              icon={instagramIcon}
              title="Profile Views"
              deviationInPercent={1375}
            />

            <ReactionCard
              count={"117"}
              icon={twitterIcon}
              title="Retweets"
              deviationInPercent={303}
            />

            <ReactionCard
              count={"507"}
              icon={twitterIcon}
              title="Likes"
              deviationInPercent={553}
            />
            <ReactionCard
              count={"107"}
              icon={youtubeIcon}
              title="Likes"
              deviationInPercent={-19}
            />

            <ReactionCard
              count={"1407"}
              icon={youtubeIcon}
              title="Total Views"
              deviationInPercent={-12}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
