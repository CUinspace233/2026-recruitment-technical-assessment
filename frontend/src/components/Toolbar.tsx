import { IconLabelButton } from "./IconLabelButton";

export const Toolbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center gap-2">
        <IconLabelButton icon="filter_alt" label="Filter" />
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
          <span className="material-icons text-gray-500 text-[20px] leading-none">
            search
          </span>
          <input
            type="search"
            placeholder="Search for a building..."
            className="w-lg bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <IconLabelButton icon="sort" label="Sort" />
      </div>
    </div>
  );
};
