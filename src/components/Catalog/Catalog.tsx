"use client";

import { useState } from "react";
import { CatalogItemsGrid } from "./ItemsGrid";
import { CatalogFilter } from "./Filter/Filter";
import { IItem } from "../../../lib/models/Item";

export interface ICatalogProps {
  data: any;
}

/**
 * This is component which wraps all Catalog components
 * @param props ICatalogProps
 * @returns JSX.Element
 */
export function Catalog(props: ICatalogProps) {
  const { data } = props;
  const [isLoading, setIsLoading] = useState(false);

  const [items, setItems] = useState<IItem[]>(data?.items);
  return (
    <div className="flex flex-col">
      {/* Filter */}
      <CatalogFilter
        setItems={setItems}
        filters={data?.filters}
        setIsLoading={setIsLoading}
      />
      {/* {isLoading??<Loader/>} */}
      {/* Products */}
      <CatalogItemsGrid items={items} id="items" />
    </div>
  );
}
