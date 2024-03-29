import React, { Dispatch } from "react";
import { IEditFilterDTO } from "../../../../lib/models/Filter/EditFilterDTO";

export interface IAppliedFiltersProps {
  filters: IEditFilterDTO[];
  setFilterEdit: Dispatch<IEditFilterDTO>;
}

export const AppliedFilters = (props: IAppliedFiltersProps) => {
  const { filters, setFilterEdit } = props;
  return (
    <div>
      {filters.map((filter) => {
        return (
          <div
            key={"appliedFilter" + filter.value}
            className="flex flex-row justify-between px-3 py-2 rounded-md bg-black text-white"
          >
            <h2>{filter?.name}</h2>
            <button
              className="ring-2 ring-primary-300 px-2 rounded-md"
              onClick={() =>
                setFilterEdit({ value: filter.value, name: filter.name })
              }
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};
