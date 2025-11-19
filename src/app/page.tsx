"use client";

import { Biz } from "@/components/biz";
import { Map } from "@/components/map";
import { useState } from "react";

export default function Home() {
  const [selectedBiz, setSelectedBiz] = useState<Biz | null>(null);

  return (
    <div>
      <header>
        <h1>biz-buddy</h1>
        <p>Time to help some business</p>
      </header>
      <main>
        <p>Here is where the map goes</p>
        <Map setSelectedBiz={setSelectedBiz} />
        <Biz selectedBiz={selectedBiz} />
      </main>
      <footer>
        <p>@crydafan on X</p>
      </footer>
    </div>
  );
}
