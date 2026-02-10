import { useState } from "react";
import { BuildingGrid } from "./components/BuildingGrid";
import { Navbar } from "./components/Navbar";
import { Toolbar } from "./components/Toolbar";
import type { NavbarIcon } from "./type";

function App() {
  const [showBuildingGrid, setShowBuildingGrid] = useState(true);

  const handleNavbarIconChange = (icon: NavbarIcon) => {
    setShowBuildingGrid(icon === "grid_view");
  };

  return (
    <>
      <Navbar onIconChange={handleNavbarIconChange} />
      <Toolbar />
      {showBuildingGrid && <BuildingGrid />}
    </>
  );
}

export default App;
