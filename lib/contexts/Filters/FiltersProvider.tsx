"use client";
// contexts/FilterProvider.tsx
import React, { ReactNode, useState } from "react";
import { FiltersContext } from "./FiltersContext";
import { IEditFilterDTO } from "../../models/Filter/EditFilterDTO";
import { editFilter } from "../../actions/editFilter";

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [appliedFilters, setAppliedFilters] = useState<IEditFilterDTO[]>([]);

  const editAppliedFilters = (newFilter: IEditFilterDTO) => {
    const newFilters = editFilter(newFilter, appliedFilters);
    setAppliedFilters(editFilter(newFilter, appliedFilters));
  };

  return (
    <FiltersContext.Provider value={{ appliedFilters, editAppliedFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};
