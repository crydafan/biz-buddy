"use client";

import { importLibrary, setOptions } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export function Map() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMap = async () => {
      setOptions({
        key: process.env.NEXT_PUBLIC_MAPS_API_KEY || "",
        v: "weekly",
      });

      const { Map } = await importLibrary("maps");
      const { Place } = await importLibrary("places");

      const position = { lat: -34.397, lng: 150.644 };

      const map = new Map(ref.current as HTMLDivElement, {
        center: position,
        zoom: 8,
        mapId: "DEMO_MAP_ID",
      });

      map.addListener("click", async (e) => {
        if (e.placeId) {
          e.stop();

          const place = new Place({
            id: e.placeId,
            requestedLanguage: "en",
          });

          await place.fetchFields({
            fields: ["displayName", "formattedAddress", "location"],
          });

          console.log(place.toJSON());
        }
      });
    };

    loadMap();
  }, []);

  return <div className="h-[600px]" ref={ref}></div>;
}
