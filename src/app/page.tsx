import { useEffect, useState } from "react";
import { fetch_all_items_data } from "../../lib/actions/fetchItemsData";
import { Catalog } from "../components/Catalog/Catalog";
import { FiltersProvider } from "../../lib/contexts/Filters/FiltersProvider";

export default async function Main() {
  let data = await fetch_all_items_data();
  return (
    <FiltersProvider>
      <main>
        <h1 className="md:text-3xl text-lg text-center md:mb-7 mb-3 font-semibold">
          Sports Nutrition
        </h1>
        {/* Catalog of products with filters */}
        <Catalog data={data} />
      </main>
    </FiltersProvider>
  );
}
