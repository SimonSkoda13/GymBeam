import React from "react";
import { IEditFilterDTO } from "../../../../lib/models/Filter/EditFilterDTO";
import { useFilters } from "../../../../lib/contexts/Filters/FiltersContext";

/**
 * This is an interface for CatalogAppliedFilters component
 */
export interface ICatalogAppliedFiltersProps {
  filters: IEditFilterDTO[];
}

/**
 * This is a component for all applied filters
 * @param props ICatalogAppliedFiltersProps
 * @returns JSX.Element
 */
export function CatalogAppliedFilters(props: ICatalogAppliedFiltersProps) {
  const { filters } = props;
  const { editAppliedFilters } = useFilters();
  return (
    <div>
      {/* Title */}
      <h2 className="text-center mt-4 mb-3 font-semibold md:text-lg text-sm">
        Použité filtre
      </h2>
      {/* All applied filters */}
      {filters.map((filter) => {
        if (filter.name) {
          return (
            <div
              key={"appliedFilter" + filter.value}
              className="flex flex-row justify-between items-center px-3 my-2 py-2 rounded-md bg-black text-white"
            >
              <h2>{filter?.name}</h2>
              <button
                className="h-min ring-2 ring-primary-300 px-2 rounded-md"
                onClick={() =>
                  editAppliedFilters({ value: filter.value, name: filter.name })
                }
              >
                X
              </button>
            </div>
          );
        }
      })}
    </div>
  );
}
