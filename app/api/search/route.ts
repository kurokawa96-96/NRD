import { NextResponse } from "next/server";

export async function GET() {
  // TODO: 実際の検索ロジックが固まり次第、ここに実装する
  return NextResponse.json({ status: "not_implemented" }, { status: 501 });
}
