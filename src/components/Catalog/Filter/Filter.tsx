"use client";

import { Dispatch, useEffect, useState } from "react";
import { IItem } from "../../../../lib/models/Item";
import { IFilter } from "../../../../lib/models/Filter/Filter";
import { fetch_filtered_items_data } from "../../../../lib/actions/fetchItemsData";
import { RangeFilter } from "./RangeFilter/RangeFilter";
import { isIRangeFilter } from "../../../../lib/models/Filter/RangeFilter";
import { isICheckBoxFilter } from "../../../../lib/models/Filter/CheckBoxFilter";
import { MultiSelectFilter } from "./MultiSelectFilter/MultiSelectFilter";
import { isIMultiSelectFilter } from "../../../../lib/models/Filter/MultiSelectFilter";
import { CheckBoxFilter } from "./CheckBoxFilter/CheckBoxFilter";
import { CatalogAppliedFilters } from "./AppliedFilters";
import { useFilters } from "../../../../lib/contexts/Filters/FiltersContext";
import { SectionDivider } from "@/components/SectionDivider";

/**
 * This is an interface of parent CatalogFilter props
 */
export interface ICatalogFilterParentProps {
  filters: IFilter[];
  setItems: Dispatch<IItem[]>;
  setIsLoading?: Dispatch<boolean>;
}

/**
 * This is a component for displaying and wrapping all filters for items and applied filters
 * @param props ICatalogFilterParentProps
 * @returns JSX.Element
 */
export function CatalogFilter(props: ICatalogFilterParentProps) {
  const { filters, setItems } = props;
  const { appliedFilters } = useFilters();

  // setup just to group filters in categories
  const [filtersByType, setFiltersByType] = useState<{
    [key: string]: IFilter[];
  }>({});
  useEffect(() => {
    const filtersObject: { [key: string]: IFilter[] } = {};
    filters.forEach((filter) => {
      filtersObject[filter.type] = filtersObject[filter.type]
        ? [...filtersObject[filter.type], filter]
        : [filter];
    });
    setFiltersByType(filtersObject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  // when applied filters state changes refetch products
  useEffect(() => {
    async function fetchProducts() {
      // join all filters to one string
      let filterString = appliedFilters.map((filter) => filter?.value).join("");
      const data = await fetch_filtered_items_data(filterString);
      const items: IItem[] = data?.items;
      setItems(items);
    }

    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appliedFilters]);
  return (
    <div className="flex flex-col mb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        {/* First multiselect filters */}
        <div>
          {filtersByType["multiselect"]?.map((filter, index) => {
            if (isIMultiSelectFilter(filter) && index % 2 == 0) {
              return <MultiSelectFilter key={filter.code} {...filter} />;
            }
          })}
        </div>
        {/* First multiselect filters */}
        <div>
          {filtersByType["multiselect"]?.map((filter, index) => {
            if (isIMultiSelectFilter(filter) && index % 2 != 0) {
              return <MultiSelectFilter key={filter.code} {...filter} />;
            }
          })}
        </div>
        {/* Checkbox filters */}
        <div>
          {filtersByType["checkbox"]?.map((filter) => {
            if (isICheckBoxFilter(filter)) {
              return <CheckBoxFilter key={filter.code} {...filter} />;
            }
          })}
        </div>
      </div>
      {/* Range filters */}
      <div className="flex flex-col content-center md:px-[20%]">
        <div>
          {filtersByType["range"]?.map((filter) => {
            if (isIRangeFilter(filter) && filter.code == "price") {
              return <RangeFilter key={filter.code} currency="€" {...filter} />;
            } else if (isIRangeFilter(filter)) {
              return <RangeFilter key={filter.code} {...filter} />;
            }
          })}
        </div>
        {/* Applied filters */}
        <CatalogAppliedFilters filters={appliedFilters} />
        <SectionDivider />
      </div>
    </div>
  );
}
