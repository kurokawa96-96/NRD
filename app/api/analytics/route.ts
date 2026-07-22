import { NextResponse } from "next/server";

export async function POST() {
  // TODO: 実際の分析ロジックが固まり次第、ここに実装する
  return NextResponse.json({ status: "not_implemented" }, { status: 501 });
}
