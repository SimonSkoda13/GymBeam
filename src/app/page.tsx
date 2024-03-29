import { useEffect, useState } from "react";
import { fetch_all_items_data } from "../../lib/actions/fetchItemsData";
import { Catalog } from "../components/Catalog/Catalog";

export default async function Main() {
  let data = await fetch_all_items_data();
  return (
    <main className="px-[2%] py-[3rem]">
      <Catalog data={data} />
    </main>
  );
}
