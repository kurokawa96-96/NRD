import { NextResponse } from "next/server";

export async function POST() {
  // TODO: 診断ロジック(lib/scoring.ts)完成後、ここでスコアリング結果を返す
  return NextResponse.json({ status: "not_implemented" }, { status: 501 });
}
