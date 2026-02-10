import { BuildingCard } from "./BuildingCard";
import data from "../../public/data.json";

export const BuildingGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
      {data.map((building) => (
        <BuildingCard
          key={building.name}
          name={building.name}
          roomsAvailable={building.rooms_available}
          image={building.building_picture || building.building_file || ""}
        />
      ))}
    </div>
  );
};
