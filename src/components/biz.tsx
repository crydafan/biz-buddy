import { BizType } from "@/types/biz";
import Image from "next/image";

interface BizProps {
  selectedBiz: BizType | null;
}

export function Biz({ selectedBiz }: BizProps) {
  if (!selectedBiz) {
    return (
      <div>
        <h2>Business Info</h2>
        <p>Select a place on the map to see business details here.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Business Info</h2>

      {selectedBiz.photo && (
        <Image
          src={selectedBiz.photo}
          alt={selectedBiz.name}
          width={400}
          height={300}
        />
      )}

      <p>
        <strong>Name:</strong> {selectedBiz.name}
      </p>
      <p>
        <strong>Address:</strong> {selectedBiz.address}
      </p>
      <p>
        <strong>Location:</strong> Lat {selectedBiz.location.lat}, Lng{" "}
        {selectedBiz.location.lng}
      </p>
      <p>
        <strong>Summary:</strong> {selectedBiz.summary}
      </p>
    </div>
  );
}
