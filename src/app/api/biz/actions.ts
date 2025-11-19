"use server";

import { BizType } from "@/types/biz";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export async function analyzeBiz(biz: BizType): Promise<string> {
  const { text } = await generateText({
    model: openai("gpt-4.1-nano"),
    prompt: `
    Analyze the following business and provide a brief summary of its strengths and potential areas for improvement.
    Return the analysis in a concise paragraph as plain text.
    Business Name: ${biz.name}
    Address: ${biz.address}
    Summary: ${biz.summary}
    `,
  });

  return text;
}
