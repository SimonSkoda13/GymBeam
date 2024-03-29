import * as React from "react";
import { ICatalogFilterProps } from "../Filter";
import { IMultiSelectFilter } from "../../../../../lib/models/Filter/MultiSelectFilter";
import { MultiSelectDropDown } from "./MultiSelectDropDown";

export interface IMultiSelectFilterProps
  extends ICatalogFilterProps,
    IMultiSelectFilter {}

export function MultiSelectFilter(props: IMultiSelectFilterProps) {
  const { setFilterEdit, options, code, name } = props;
  return (
    <div id={"dropdown" + code}>
      <MultiSelectDropDown {...props} />
    </div>
  );
}
