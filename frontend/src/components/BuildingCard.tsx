type BuildingCardProps = {
  name: string;
  roomsAvailable: number;
  image: string;
};

export const BuildingCard = ({
  name,
  roomsAvailable,
  image,
}: BuildingCardProps) => {
  return (
    <div
      className="relative overflow-hidden rounded-md border border-gray-300 h-70 bg-center bg-cover"
      style={{ backgroundImage: image ? `url(${image})` : undefined }}
    >
      <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/95 px-2 py-2 text-[11px] font-medium leading-none tracking-tight text-gray-900 shadow">
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        <span>{roomsAvailable} rooms available</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 mx-1 my-2 flex min-h-10 items-center rounded-md bg-orange-500 px-3 text-white">
        <h3 className="m-0 text-sm font-semibold leading-none">{name}</h3>
      </div>
    </div>
  );
};
