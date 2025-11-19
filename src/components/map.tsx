"use client";

import { importLibrary, setOptions } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export function MapComponent() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMap = async () => {
      setOptions({
        key: process.env.NEXT_PUBLIC_MAPS_API_KEY || "",
        v: "weekly",
      });

      const { Map } = await importLibrary("maps");

      const position = { lat: -34.397, lng: 150.644 };

      const map = new Map(ref.current as HTMLDivElement, {
        center: position,
        zoom: 8,
        mapId: "DEMO_MAP_ID",
      });
    };

    loadMap();
  }, []);

  return <div className="h-[600px]" ref={ref}></div>;
}
