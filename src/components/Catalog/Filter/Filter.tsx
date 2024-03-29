"use client";

import { Dispatch, useEffect, useState } from "react";
import { IItem } from "../../../../lib/models/Item";
import { IFilter } from "../../../../lib/models/Filter/Filter";
import { fetch_filtered_items_data } from "../../../../lib/actions/fetchItemsData";
import { RangeFilter } from "./RangeFilter/RangeFilter";
import { IEditFilterDTO } from "../../../../lib/models/Filter/EditFilterDTO";
import { editFilter } from "../../../../lib/actions/editFilter";
import { isIRangeFilter } from "../../../../lib/models/Filter/RangeFilter";

import { isICheckBoxFilter } from "../../../../lib/models/Filter/CheckBoxFilter";
import { MultiSelectFilter } from "./MultiSelectFilter/MultiSelectFilter";
import { isIMultiSelectFilter } from "../../../../lib/models/Filter/MultiSelectFilter";
import { CheckBoxFilter } from "./CheckBoxFilter/CheckBoxFilter";
import { FilterType } from "../../../../lib/models/Filter/FilterType";
import { AppliedFilters } from "./AppliedFilters";
import { editAppliedFilters } from "../../../../lib/actions/editAppliedFilters";
import { useDebouncedEffect } from "../../../../lib/hooks/useDebouncedEffect";

/**
 * Interface for each filter
 */
export interface ICatalogFilterProps extends IFilter {
  setFilterEdit: Dispatch<IEditFilterDTO>;
}

/**
 * Interface of parent CatalogFilter props
 */
export interface ICatalogFilterParentProps {
  filters: IFilter[];
  setItems: Dispatch<IItem[]>;
}

/**
 * Component for displaying and wrapping all filters for items
 * @param props ICatalogFilterParentProps
 * @returns JSX.Element
 */
export function CatalogFilter(props: ICatalogFilterParentProps) {
  const { filters, setItems } = props;

  // state of edit
  const [filterEdit, setFilterEdit] = useState<IEditFilterDTO>({
    value: "",
  });

  const [appliedFilters, setAppliedFilters] = useState<IEditFilterDTO[]>([]);

  // filters based on type
  const [filtersByType, setFiltersByType] = useState<{
    [key: string]: Array<IFilter>;
  }>({});

  // state of filter string
  const [filterString, setFilterString] = useState("");

  useEffect(() => {
    const filtersObject: { [key: string]: Array<IFilter> } = {};
    filters.map((filter) => {
      if (filtersObject[filter.type]) {
        filtersObject[filter.type].push(filter);
      } else {
        filtersObject[filter.type] = [filter];
      }
    });
    setFiltersByType(filtersObject);
  }, [filters]);
  // when filterString changes it fetches filtered data
  useDebouncedEffect(
    () => {
      async function fetchProducts() {
        const data = await fetch_filtered_items_data(filterString);
        const items: IItem[] = data?.items;
        setItems(items);
      }
      fetchProducts();
    },
    [filterString],
    40
  );

  // when filter object changes it checks if it is valid and does the changes
  useEffect(() => {
    setAppliedFilters([
      ...editAppliedFilters(filterString, filterEdit, appliedFilters),
    ]);

    setFilterString(editFilter(filterString, filterEdit));
  }, [filterEdit]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
      <div>
        {filtersByType["multiselect"]?.map((filter, index) => {
          if (isIMultiSelectFilter(filter) && index % 2 == 0) {
            return (
              <MultiSelectFilter
                key={filter.code}
                setFilterEdit={setFilterEdit}
                {...filter}
              />
            );
          }
        })}
      </div>
      <div>
        {filtersByType["multiselect"]?.map((filter, index) => {
          if (isIMultiSelectFilter(filter) && index % 2 != 0) {
            return (
              <MultiSelectFilter
                key={filter.code}
                setFilterEdit={setFilterEdit}
                {...filter}
              />
            );
          }
        })}
      </div>
      <div>
        {filtersByType["checkbox"]?.map((filter) => {
          if (isICheckBoxFilter(filter)) {
            return (
              <CheckBoxFilter
                key={filter.code}
                setFilterEdit={setFilterEdit}
                {...filter}
              />
            );
          }
        })}
      </div>
      <div>
        {filtersByType["range"]?.map((filter) => {
          if (isIRangeFilter(filter) && filter.code == "price") {
            return (
              <RangeFilter
                key={filter.code}
                setFilterEdit={setFilterEdit}
                currency="€"
                {...filter}
              />
            );
          } else if (isIRangeFilter(filter)) {
            return (
              <RangeFilter
                key={filter.code}
                setFilterEdit={setFilterEdit}
                {...filter}
              />
            );
          }
        })}
      </div>
      <div>
        <AppliedFilters
          filters={appliedFilters}
          setFilterEdit={setFilterEdit}
        />
      </div>
    </div>
  );
}
