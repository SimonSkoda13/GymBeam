import { createContext, useContext } from "react";
import { IEditFilterDTO } from "../../models/Filter/EditFilterDTO";

interface FiltersContextType {
  appliedFilters: IEditFilterDTO[];
  editAppliedFilters: (filter: IEditFilterDTO) => void;
}

export const FiltersContext = createContext<FiltersContextType | undefined>(
  undefined
);

export function useFilters() {
  const context = useContext(FiltersContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}
