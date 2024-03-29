"use client";
// contexts/FilterProvider.tsx
import React, { ReactNode, useState } from "react";
import { FiltersContext } from "./FiltersContext";
import { IEditFilterDTO } from "../../models/Filter/EditFilterDTO";
import { editFilter } from "../../actions/editFilter";

/**
 * This is an interface for Filters Context Provider
 */
interface FiltersProviderProps {
  children: ReactNode;
}

/**
 * This is a component for Filters Context Provider
 * @param props FiltersProviderProps
 * @returns JSX.Element
 */
export function FiltersProvider(props: FiltersProviderProps) {
  const { children } = props;

  const [appliedFilters, setAppliedFilters] = useState<IEditFilterDTO[]>([]);

  const editAppliedFilters = (newFilter: IEditFilterDTO) => {
    setAppliedFilters(editFilter(newFilter, appliedFilters));
  };

  return (
    <FiltersContext.Provider value={{ appliedFilters, editAppliedFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
