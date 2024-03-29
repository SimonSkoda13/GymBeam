"use server";
/**
 * Returns response data of all items in category 2416,
 * If response is not ok, throws error
 * If catches error, logs it to console
 * It is server action
 * @returns data<any>
 */
export async function fetch_all_items_data() {
  const url = process.env.BACKEND_URL + "catalog/products?category_ids[]=2416&";

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Items response was not ok");
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Failed to fetch products data:", error);
  }
}

/**
 * Returns response data of filtered items in category 2416,
 * If response is not ok, throws error
 * If catches error, logs it to console
 * It is server action
 * @returns data<any>
 */
export async function fetch_filtered_items_data(filter: string) {
  const url =
    process.env.BACKEND_URL + "catalog/products?category_ids[]=2416" + filter;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Items response was not ok");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Failed to fetch products data:", error);
  }
}
