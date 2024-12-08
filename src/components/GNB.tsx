import { BotIcon, GlobeIcon, HomeIcon } from "@/components/Icons";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";

export const GNB = () => {
  return (
    <div className="flex flex-row items-center justify-end py-2 pl-6 pr-4 gap-4">
      <nav className="flex items-center justify-between gap-4">
        <div className="tooltip tooltip-bottom" data-tip="Home">
          <Link href="/">
            <HomeIcon size={20} />
          </Link>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Chat">
          <Link href="/chat">
            <BotIcon size={20} />
          </Link>
        </div>
      </nav>
      <div className="flex h-5 tooltip tooltip-bottom" data-tip="Language">
        <button>
          <GlobeIcon size={20} />
        </button>
      </div>
      <DarkModeToggle />
    </div>
  );
};
