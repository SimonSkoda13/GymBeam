"use client";

import { useState } from "react";
import { CatalogItemsGrid } from "./ItemsGrid";
import { CatalogFilter } from "./Filter/Filter";
import { IItem } from "../../../lib/models/Item";

/**
 * This is an interface for Catalog component props
 */
export interface ICatalogProps {
  data: any;
}

/**
 * This is a component which wraps all Catalog components
 * @param props ICatalogProps
 * @returns JSX.Element
 */
export function Catalog(props: ICatalogProps) {
  const { data } = props;

  const [items, setItems] = useState<IItem[]>(data?.items);
  return (
    <div className="flex flex-col">
      {/* Filter */}
      <CatalogFilter setItems={setItems} filters={data?.filters} />
      {/* Products */}
      <CatalogItemsGrid items={items} id="items" />
    </div>
  );
}
