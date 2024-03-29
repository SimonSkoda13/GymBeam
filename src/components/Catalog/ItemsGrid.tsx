"use client";

import { CatalogItem } from "./Item";
import { IItem } from "../../../lib/models/Item";

/**
 * This is an interface for Catalog Items component props
 */
export interface ICatalogItemsGridProps {
  items: IItem[];
  id?: string;
}

/**
 * This a component has the responsibility of displaying catalog items
 * @param props ICatalogItemsProps
 * @returns JSX.Element
 */
export function CatalogItemsGrid(props: ICatalogItemsGridProps) {
  const { items, id } = props;
  return (
    <div
      className="md:grid flex flex-col md:grid-cols-3 gap-7 md:gap-5 items-center md:items-stretch"
      id={id}
    >
      {items?.map((item) => {
        return <CatalogItem key={"item-" + item.id} {...item} />;
      })}
    </div>
  );
}
