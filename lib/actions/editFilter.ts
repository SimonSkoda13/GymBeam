import { IEditFilterDTO } from "../models/Filter/EditFilterDTO";

/**
 * Takes current filter string, filterEdit object and decides if it is valid
 * @param filterString string
 * @param filterEdit IEditFilter
 * @returns string
 */
export const editFilter = (
  filterString: string,
  filterEdit: IEditFilterDTO
) => {
  // copy of current string
  let newString = filterString;

  const queryParams = new URLSearchParams(filterString);

  // if filter is price
  if (queryParams.has("price") && filterEdit.value.includes("price")) {
    // set new price filter in params object
    queryParams.set("price", filterEdit.value.split("=")[1]);
    // set new string with missing '&'
    newString = `&${queryParams.toString()}`;
  }

  //  if new filter is currently there
  else if (filterString.includes(filterEdit.value)) {
    // delete filter from params
    newString = filterString.replace(filterEdit.value, "");
  }

  // if all is right
  else {
    newString += filterEdit.value;
  }

  return newString;
};
