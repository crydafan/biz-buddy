"use client";

import { BizType } from "@/types/biz";
import { importLibrary, setOptions } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

interface MapProps {
  setSelectedBiz: (biz: BizType) => void;
}

export function Map({ setSelectedBiz }: MapProps) {
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

      map.addListener(
        "click",
        async (e: { placeId: string | null | undefined; stop: () => void }) => {
          if (!e.placeId) {
            return;
          }

          e.stop();

          const place = new Place({
            id: e.placeId,
            requestedLanguage: "en",
          });

          await place.fetchFields({
            fields: [
              "displayName",
              "photos",
              "formattedAddress",
              "location",
              "reviews",
              "editorialSummary",
            ],
          });

          const biz: BizType = {
            id: place.id,
            photo: place.photos?.[0] || null,
            name: place.displayName!,
            address: place.formattedAddress!,
            summary: place.editorialSummary || "",
            location: {
              lat: place.location!.lat(),
              lng: place.location!.lng(),
            },
          };

          setSelectedBiz(biz);
          console.log(place.toJSON());
        }
      );
    };

    loadMap();
  }, [setSelectedBiz]);

  return <div className="h-[600px]" ref={ref}></div>;
}
