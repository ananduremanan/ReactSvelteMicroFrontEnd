import {
  Cog,
  HelpCircle,
  LogOut,
  Fan,
  Timer,
  Target,
  CirclePlus,
  BookPlus,
  History,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="min-h-screen w-80 border flex flex-col justify-between p-4">
      <div>
        <div className="font-semibold">
          <span>Grampro Research Solutions</span>
          <p className="font-thin text-xs">A GBS Company</p>
          <hr className="mr-8 mt-2 border-dotted" />
        </div>
        <div className="text-xs mt-4">
          <div className="mt-4 flex items-center gap-2">
            <Fan size="16" />
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Timer size="16" />
            <Link to="/dashboard/counter">Counter</Link>
          </div>
          <button
            onClick={() => {
              if (window.addToCart) {
                window.addToCart();
              }
            }}
            className="mt-4"
          >
            Interact With Svelte!
          </button>

          <hr className="mr-8 mt-6 border-dotted" />

          <div className="mt-4 flex flex-col text-xs gap-2 ">
            <span className="text-xs text-gray-400">Employee Management</span>
            <span className="flex gap-2 items-center cursor-pointer">
              <Target size="16" />
              Overview
            </span>
            <span className="flex gap-2 items-center cursor-pointer">
              <CirclePlus size="16" />
              Positions
            </span>
            <span className="flex gap-2 items-center cursor-pointer">
              <History size="16" />
              History
            </span>
          </div>

          <hr className="mr-8 mt-6 border-dotted" />

          <div className="mt-4 flex flex-col text-xs gap-2 ">
            <span className="text-xs text-gray-400">HR Management</span>
            <span className="flex gap-2 items-center cursor-pointer">
              <BookPlus size="16" />
              Mark Leave
            </span>
            <span className="flex gap-2 items-center cursor-pointer">
              <LogOut size="16" />
              Resignation
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-4 flex flex-col text-sm gap-2">
          <span className="flex gap-2 items-center cursor-pointer">
            <Cog size="16" />
            Settings
          </span>
          <span className="flex gap-2 items-center cursor-pointer">
            <HelpCircle size="16" />
            Help
          </span>
          <Link to={"/"}>
            <span className="flex gap-2 items-center cursor-pointer">
              <LogOut size="16" />
              Logout
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
