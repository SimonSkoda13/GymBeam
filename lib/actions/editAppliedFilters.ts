import { IEditFilterDTO } from "../models/Filter/EditFilterDTO";

/**
 * This function gets information about edit event end based on that decides wether add or remove it from applied filters array
 * @param filterString string
 * @param filterEdit IEditFilterDTO
 * @param filters IEditFilterDTO[]
 * @returns IEditFilterDTO[]
 */
export const editAppliedFilters = (
  filterString: string,
  filterEdit: IEditFilterDTO,
  filters: IEditFilterDTO[]
) => {
  if (filterEdit.name) {
    //  if filter is currently there removes it
    if (filterString.includes(filterEdit.value)) {
      const newArray = filters.filter(
        (filter) => filter.value != filterEdit.value
      );
      console.log(newArray);
      filters = newArray;
    } else {
      filters.push(filterEdit);
    }
  }

  return filters;
};
