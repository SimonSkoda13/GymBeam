import { useState } from "react";
import { IMultiSelectFilter } from "../../../../../lib/models/Filter/MultiSelectFilter";
import { useFilters } from "../../../../../lib/contexts/Filters/FiltersContext";

/**
 * This is a component for multiselect type filter
 * @param props IMultiSelectFilter
 * @returns JS.Element
 */
export function MultiSelectFilter(props: IMultiSelectFilter) {
  const { name, code, options } = props;
  const { editAppliedFilters } = useFilters();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionClick = (value: number, optionName: string) => {
    editAppliedFilters({ value: `&${code}[]=${value}`, name: optionName });
    setIsOpen(false); // Close the dropdown menu
  };

  return (
    <div className="relative my-3" id={"multiselect" + code}>
      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row px-4 py-2 text-left ring-gray-200 ring-2 w-full rounded-md justify-between"
      >
        <h2>{name}</h2>
        <svg
          className="size-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <rect x="0" fill="none" width="24" height="24"></rect>{" "}
            <g>
              <path d="M7 10l5 5 5-5"></path>{" "}
            </g>
          </g>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-20 left-0 right-0 bg-white border border-gray-200 w-full rounded-md mt-1 overflow-y-auto max-h-60">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option.value, option.name)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
