"use client";
import { useEffect, useRef, useState } from "react";
import {
  IRange,
  IRangeFilter,
} from "../../../../../lib/models/Filter/RangeFilter";
import { RangeSlider } from "./RangeSlider";
import { useFilters } from "../../../../../lib/contexts/Filters/FiltersContext";

export function RangeFilter(props: IRangeFilter) {
  const { max, min } = props;
  const { editAppliedFilters } = useFilters();

  const [range, setRange] = useState<IRange>({ min: min, max: max });

  useEffect(() => {
    editAppliedFilters({ value: `&price=${range.min}-${range.max}` });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range]);

  return (
    <div>
      <RangeSlider {...props} setRange={setRange} range={range} />
    </div>
  );
}
