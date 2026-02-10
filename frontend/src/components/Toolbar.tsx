import { IconLabelButton } from "./IconLabelButton";

export const Toolbar = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-4">
        <div className="col-span-2 flex h-11 items-center gap-2 rounded-md border border-gray-300 px-3 focus-within:ring-2 focus-within:ring-orange-500 md:col-span-1 md:col-start-2 md:row-start-1 md:h-9">
          <span className="material-icons text-gray-500 text-[20px] leading-none">
            search
          </span>
          <input
            type="search"
            placeholder="Search for a building..."
            className="w-full min-w-0 bg-transparent text-base text-gray-900 outline-none placeholder:text-gray-400 md:text-sm"
          />
        </div>

        <IconLabelButton
          icon="filter_alt"
          label="Filter"
          className="h-11 w-[88%] justify-center justify-self-start rounded-xl border-2 border-orange-500 px-3 md:col-start-1 md:row-start-1 md:h-9 md:w-auto md:justify-self-auto md:rounded-sm md:border md:px-2"
        />

        <IconLabelButton
          icon="sort"
          label="Sort"
          className="h-11 w-[88%] justify-center justify-self-end rounded-xl border-2 border-orange-500 px-3 md:col-start-3 md:row-start-1 md:h-9 md:w-auto md:justify-self-auto md:rounded-sm md:border md:px-2"
        />
      </div>
    </div>
  );
};
