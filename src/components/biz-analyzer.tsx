import { analyzeBiz } from "@/app/api/biz/actions";
import { BizType } from "@/types/biz";
import { useEffect, useState } from "react";

interface BizAnalyzerProps {
  selectedBiz: BizType | null;
}

export function BizAnalyzer({ selectedBiz }: BizAnalyzerProps) {
  const [analysis, setAnalysis] = useState<string>("");

  useEffect(() => {
    const fetchAnalysis = async () => {
      if (selectedBiz) {
        const analysis = await analyzeBiz(selectedBiz);
        setAnalysis(analysis);
      }
    };
    fetchAnalysis();
  }, [selectedBiz]);

  if (!selectedBiz) {
    return (
      <div>
        <h2>Business Analyzer</h2>
        <p>This component will analyze the selected business.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Business Analysis</h2>
      <p>{analysis}</p>
    </div>
  );
}
