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
      className="relative h-24 overflow-hidden rounded-xl bg-cover bg-center sm:h-52 md:h-70 md:rounded-xl md:border md:border-gray-300"
      style={{ backgroundImage: image ? `url(${image})` : undefined }}
    >
      <div className="absolute inset-0 bg-black/25 md:hidden" />

      <div className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold leading-none tracking-tight text-gray-900 shadow md:top-3 md:translate-y-0 md:gap-1 md:px-2 md:text-[11px] md:font-medium">
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        <span className="md:hidden">
          {roomsAvailable} / {roomsAvailable}
        </span>
        <span className="hidden md:inline">
          {roomsAvailable} rooms available
        </span>
      </div>

      <div className="absolute inset-y-0 left-3 right-24 flex items-center text-white md:inset-y-auto md:bottom-0 md:left-0 md:right-0 md:mx-1 md:my-2 md:min-h-10 md:rounded-md md:bg-orange-500 md:px-3">
        <h3 className="m-0 text-lg font-bold leading-tight drop-shadow md:text-sm md:leading-none md:drop-shadow-none">
          {name}
        </h3>
      </div>
    </div>
  );
};
