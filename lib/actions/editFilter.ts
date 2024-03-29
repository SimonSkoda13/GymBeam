import { IEditFilterDTO } from "../models/Filter/EditFilterDTO";

/**
 * Takes current filters, filterEdit object and decides if add or remove it
 * @param filterString string
 * @param filterEdit IEditFilter
 * @returns string
 */
export const editFilter = (
  newFilter: IEditFilterDTO,
  currentFilters: IEditFilterDTO[]
): IEditFilterDTO[] => {
  // Check if newFilter is a "price" filter
  if (newFilter.value.includes("price")) {
    // Remove all existing "price" filters, only if newFilter is also a "price" filter
    const filtersWithoutPrice = currentFilters.filter(
      (filter) => !filter.value.includes("price")
    );
    return [...filtersWithoutPrice, newFilter];
  } else {
    // For non-"price" filters, check if the exact filter already exists
    const filterExistsIndex = currentFilters.findIndex(
      (filter) => filter.value === newFilter.value
    );

    if (filterExistsIndex !== -1) {
      // If the filter exists, remove it
      return currentFilters.filter((_, index) => index !== filterExistsIndex);
    } else {
      // If it doesn't exist, add the new filter
      return [...currentFilters, newFilter];
    }
  }
};
