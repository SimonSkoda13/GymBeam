import { useEffect, useState } from "react";
import { fetch_all_items_data } from "../../lib/actions/fetchItemsData";
import { Catalog } from "../components/Catalog/Catalog";
import { FilterProvider } from "../../lib/contexts/Filters/FiltersProvider";

export default async function Main() {
  let data = await fetch_all_items_data();
  return (
    <FilterProvider>
      <main className="px-[2%] py-[3rem]">
        <h1 className="md:text-3xl text-lg text-center md:mb-7 mb-3 font-semibold">
          Sports Nutrition
        </h1>
        <Catalog data={data} />
      </main>
    </FilterProvider>
  );
}
