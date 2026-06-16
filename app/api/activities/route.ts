import { NextResponse } from "next/server";
import { activities } from "@/lib/demo-data";
import { getSupabaseServerClient } from "@/lib/supabase-server";

export async function GET() {
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json({ ok: true, mode: "demo", activities });
  }
  const { data, error } = await supabase.from("activities").select("*").order("starts_at", { ascending: true });
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, mode: "supabase", activities: data });
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  const title = String(payload.title ?? "").trim();
  if (!title) return NextResponse.json({ ok: false, error: "title_required" }, { status: 400 });

  const supabase = getSupabaseServerClient();
  if (!supabase) return NextResponse.json({ ok: true, mode: "demo", activity: { ...payload, title } });

  const { data, error } = await supabase.from("activities").insert({ ...payload, title }).select("*").single();
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, mode: "supabase", activity: data });
}
