import React, { useState, useEffect, Dispatch } from "react";
import {
  IRange,
  IRangeFilter,
} from "../../../../../lib/models/Filter/RangeFilter";

export interface IRangeSlider extends IRangeFilter {
  setRange: Dispatch<IRange>;
  range: IRange;
}

export function RangeSlider(props: IRangeSlider) {
  const { min, max, range, setRange, currency = "", code } = props;

  const [minCurrentPrice, setMinCurrentPrice] = useState(min);
  const [maxCurrentPrice, setMaxCurrentPrice] = useState(max);

  // Update thumb positions whenever minPrice or maxPrice changes
  useEffect(() => {
    setRange({ min: minCurrentPrice, max: maxCurrentPrice });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minCurrentPrice, maxCurrentPrice]);

  const minThumb = ((minCurrentPrice - min) / (max - min)) * 100;
  const maxThumb = 100 - ((maxCurrentPrice - min) / (max - min)) * 100;

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = Number(e.target.value);
    if (eventValue <= maxCurrentPrice && eventValue >= min) {
      setMinCurrentPrice(eventValue);
    }
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = Number(e.target.value);
    if (eventValue >= minCurrentPrice && eventValue <= max) {
      setMaxCurrentPrice(eventValue);
    }
  };

  return (
    <div className="flex mt-[5rem] justify-center items-center">
      <div className="relative w-full">
        <div className="relative z-10 h-2">
          <div
            className="absolute z-20 top-0 bottom-0 rounded-md bg-primary"
            style={{ right: `${maxThumb}%`, left: `${minThumb}%` }}
          ></div>
          <div className="absolute z-10 top-0 bottom-0 rounded-md bg-gray-100 w-full"></div>
          <div className="flex py-2 px-3 absolute z-30 top-[-3rem] bg-primary-300 rounded-full -mt-2 left-0 justify-center items-center text-white font-bold">
            {`${min} ${currency}`}
          </div>
          <div className="flex py-2 px-3 absolute z-30 top-[-3rem] bg-primary-300 rounded-full -mt-2 right-0 justify-center items-center text-white font-bold">
            {`${max} ${currency}`}
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
          <div>
            <input
              type="number"
              id={"rangeMin" + code}
              maxLength={3}
              onChange={handleMinInputChange}
              value={minCurrentPrice}
              className="pl-2 py-1 mr-2 border border-gray-200 rounded max-w-16 text-center"
            />
            {currency}
          </div>
          <span className="text-lg">-</span>
          <div>
            <input
              type="number"
              id={"rangeMax" + code}
              maxLength={3}
              onChange={handleMaxInputChange}
              value={maxCurrentPrice}
              className="pl-2 py-1 mr-2 border border-gray-200 rounded max-w-16 text-center"
            />
            {currency}
          </div>
        </div>
      </div>
    </div>
  );
}
