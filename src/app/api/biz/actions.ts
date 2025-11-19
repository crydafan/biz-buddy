import { BizType } from "@/types/biz";

export async function analyzeBiz(biz: BizType): Promise<string> {
  // Placeholder analysis logic
  return `The business ${biz.name} located at ${biz.address} seems to be a great place with a summary as follows: ${biz.summary}`;
}
