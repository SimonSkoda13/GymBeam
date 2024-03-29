import Image from "next/image";
import { IItem } from "../../../lib/models/Item";

/**
 * This component has the responsibility of displaying a single item from catalog.
 * @param props IItem
 * @returns JSX.Element
 */
export function CatalogItem(props: IItem) {
  const { id, name, formatted_price, rating_summary, thumbnail } = props;

  return (
    <div className="relative flex max-w-sm flex-col justify-between rounded-lg border border-gray-100 bg-white shadow-md px-3 py-3 md:py-6 md:px-5">
      <a href="">
        <div className="relative">
          {/* Define the height of the image container */}
          <Image
            alt="item picture"
            src={thumbnail}
            layout="responsive"
            width={500}
            height={500}
            objectFit="cover"
          />
          {/* Use objectFit to control how the image fills the container */}
        </div>
        <h5 className="text-lg tracking-tight text-slate-900">{name}</h5>

        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-xl font-bold text-slate-900">
              {formatted_price}
            </span>
          </p>
          {/* Assuming rating is always 5 for simplicity, but you can make it dynamic */}
          <div className="flex items-center">
            <span className="flex flex-row items-center mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-1 text-xs font-semibold gap-1">
              <h3>{rating_summary.toFixed(1)} %</h3>
              <svg
                aria-hidden="true"
                className="size-5 text-yellow-500"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </span>
          </div>
        </div>
      </a>
      <button
        // onClick={}
        className="flex w-full items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-primary-300"
      >
        Add to cart
      </button>
    </div>
  );
}
