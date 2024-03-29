import { IFilter } from "./Filter";

/**
 * This is an interface for Range type Filter
 */
export interface IRangeFilter extends IFilter, IRange {
  currency?: string;
}

/**
 * This is interface for Range
 */
export interface IRange {
  max: number;
  min: number;
}

/**
 * This is function for checking if filter is type of IRangeFilter
 * @param item IFilter
 * @returns boolean
 */
export function isIRangeFilter(item: IFilter): item is IRangeFilter {
  return "max" in item && "min" in item;
}
