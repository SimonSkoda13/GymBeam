import { IFilter } from "./Filter";
import { IFilterValue } from "./FilterValue";

/**
 * This is an interface for Check Box type Filter
 */
export interface ICheckBoxFilter extends IFilter {
  options: IFilterValue[];
}

/**
 * This is function for checking if filter is type of ICheckBoxFilter
 * @param item IFilter
 * @returns boolean
 */
export function isICheckBoxFilter(item: IFilter): item is ICheckBoxFilter {
  return "options" in item;
}
