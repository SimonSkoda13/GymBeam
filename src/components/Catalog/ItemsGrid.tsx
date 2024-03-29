"use client";

import { useEffect, useState } from "react";
import { CatalogItem } from "./Item";
import Image from "next/image";
import { IItem } from "../../../lib/models/Item";

export interface ICatalogItemsGridProps {
  items: IItem[];
}

/**
 * This component has the responsibility of displaying catalog items
 * @param props ICatalogItemsProps
 * @returns JSX.Element
 */
export function CatalogItemsGrid(props: ICatalogItemsGridProps) {
  const { items } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 content-center">
      {items?.map((item) => {
        return <CatalogItem key={"item-" + item.id} {...item} />;
      })}
    </div>
  );
}
