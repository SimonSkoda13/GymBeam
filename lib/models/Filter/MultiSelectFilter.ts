import { IFilter } from "./Filter";
import { IFilterValue } from "./FilterValue";

/**
 * This is an interface for Multiselect type Filter
 */
export interface IMultiSelectFilter extends IFilter {
  options: IFilterValue[];
}

/**
 * This is function for checking if filter is type of IMultiselectFilter
 * @param item IFilter
 * @returns boolean
 */
export function isIMultiSelectFilter(
  item: IFilter
): item is IMultiSelectFilter {
  return "options" in item;
}
