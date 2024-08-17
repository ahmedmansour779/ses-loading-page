import { LogoIcon } from "../../../Icons/icons";
import "../../../style/HeroAnimation.css";
import PagesTitle from "./PagesTitle";

export default function Header() {
  return (
    <div className="absolute w-full -top-14 left-0 header-animation">
      <div className="container mx-auto py-2 flex items-center justify-between text-white">
        <div className="flex items-center gap-1 font-primary">
          <LogoIcon />
          <p className="text-xs font-extralight">
            Your Automation Factory
          </p>
        </div>
        <PagesTitle />
        <div style={{ boxShadow: "0px 4px 12px 0px #578DF5" }} className="py-1 px-2 border border-solid border-[#578DF5]">
          Contact Us
        </div>
      </div>
    </div >
  );
}
