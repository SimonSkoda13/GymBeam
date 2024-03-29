import { createContext, useContext } from "react";
import { IEditFilterDTO } from "../../models/Filter/EditFilterDTO";

/**
 * This is an interface for Filters Context
 */
interface FiltersContextType {
  appliedFilters: IEditFilterDTO[];
  editAppliedFilters: (filter: IEditFilterDTO) => void;
}

/**
 * This an actual Filters Context
 */
export const FiltersContext = createContext<FiltersContextType | undefined>(
  undefined
);

/**
 * This is hook for Filters Context
 * @returns FiltersContextType | undefined
 */
export function useFilters() {
  const context = useContext(FiltersContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}
