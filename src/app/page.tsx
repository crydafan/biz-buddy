"use client";

import { Biz } from "@/components/biz";
import { BizAnalyzer } from "@/components/biz-analyzer";
import { Map } from "@/components/map";
import { BizType } from "@/types/biz";
import { useState } from "react";

export default function Home() {
  const [selectedBiz, setSelectedBiz] = useState<BizType | null>(null);

  return (
    <div>
      <header>
        <h1>biz-buddy</h1>
        <p>Time to help some business</p>
      </header>
      <main>
        <Map setSelectedBiz={setSelectedBiz} />
        <div className="flex flex-1 gap-8 mt-4">
          <Biz selectedBiz={selectedBiz} />
          <BizAnalyzer selectedBiz={selectedBiz} />
        </div>
      </main>
      <footer>
        <p>@crydafan on X</p>
      </footer>
    </div>
  );
}
