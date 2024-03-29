"use client";
import { useEffect, useRef, useState } from "react";
import { ICatalogFilterProps } from "../Filter";
import {
  IRange,
  IRangeFilter,
} from "../../../../../lib/models/Filter/RangeFilter";
import { RangeSlider } from "./RangeSlider";

export interface ICatalogRangeFilter
  extends ICatalogFilterProps,
    IRangeFilter {}

export function RangeFilter(props: ICatalogRangeFilter) {
  const isMounted = useRef(false);
  const { setFilterEdit, max, min } = props;

  const [range, setRange] = useState<IRange>({ min: min, max: max });

  useEffect(() => {
    setFilterEdit({ value: `price=${range.min}-${range.max}` });
  }, [range, setFilterEdit]);

  return (
    <div>
      <RangeSlider {...props} setRange={setRange} range={range} />
    </div>
  );
}
