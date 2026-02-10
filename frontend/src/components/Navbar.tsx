import { useState } from "react";
import { ToggleIconButton } from "./ToggleIconButton";
import { NAVBAR_ICONS, type NavbarIcon } from "../type";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState<NavbarIcon | null>(null);
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      <div
        className="flex items-center gap-2 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={
            isOpen
              ? "/assets/freeRoomsLogo.png"
              : "../public/assets/freeRoomsDoorClosed.png"
          }
          alt="Freerooms"
          className="h-10 w-10 object-contain"
        />
        <span className="text-2xl font-semibold text-orange-500 hidden sm:inline">
          Freerooms
        </span>
      </div>
      <div className="flex items-center gap-2">
        {NAVBAR_ICONS.map((icon) => (
          <ToggleIconButton
            key={icon}
            icon={icon}
            isActive={activeIcon === icon}
            onClick={() =>
              setActiveIcon((prev) => (prev === icon ? null : icon))
            }
          />
        ))}
      </div>
    </nav>
  );
};
