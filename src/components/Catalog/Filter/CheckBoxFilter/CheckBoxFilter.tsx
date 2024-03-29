import { ICheckBoxFilter } from "../../../../../lib/models/Filter/CheckBoxFilter";
import { useFilters } from "../../../../../lib/contexts/Filters/FiltersContext";
import { useEffect, useState } from "react";

/**
 * This is a component for checkbox type filter
 * @param props ICheckBoxFilter
 * @returns JSX.Element
 */
export function CheckBoxFilter(props: ICheckBoxFilter) {
  const { options, code, name } = props;
  const { editAppliedFilters, appliedFilters } = useFilters();
  const [checked, setChecked] = useState(false);

  // when applied filters change check if new filters include this checkbox filter
  useEffect(() => {
    const filterValue = `&${code}[]=${options[0].value}`;
    const isFilterApplied = appliedFilters.some(
      (filter) => filter.value === filterValue
    );
    setChecked(isFilterApplied);
  }, [appliedFilters, code, options]);

  return (
    <div className="inline-flex items-center mx-2">
      {/* Checkbox */}
      <label
        className="relative flex items-center p-3 rounded-full cursor-pointer"
        htmlFor={"checkbox" + code}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={() =>
            editAppliedFilters({
              value: `&${code}[]=${options[0].value}`,
              name: name,
            })
          }
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-primary hover:before:opacity-10"
          id={"checkbox" + code}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      {/* Label */}
      <label
        className="mt-px font-light text-gray-700 cursor-pointer select-none"
        htmlFor={"checkbox" + code}
      >
        {name}
      </label>
    </div>
  );
}
