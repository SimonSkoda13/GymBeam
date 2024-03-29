"use client";
import { useState } from "react";
import { CatalogItemsGrid } from "./ItemsGrid";
import { CatalogFilter } from "./Filter/Filter";
import { IItem } from "../../../lib/models/Item";

export interface ICatalogProps {
  data: any;
}

/**
 * This component is responsible for managing state of rendered items.
 * @param props ICatalogProps
 * @returns JSX.Element
 */
export function Catalog(props: ICatalogProps) {
  const { data } = props;

  const [items, setItems] = useState<IItem[]>(data?.items);
  return (
    <div className="flex flex-col">
      <CatalogFilter setItems={setItems} filters={data?.filters} />
      <CatalogItemsGrid items={items} />
    </div>
  );
}
