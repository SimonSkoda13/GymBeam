import { FilterType } from "./FilterType";

/**
 * This is an interface for Filter from REST API
 */
export interface IFilter {
  code: string;
  global_name: string;
  name: string;
  type: FilterType;
  count: number;
}
