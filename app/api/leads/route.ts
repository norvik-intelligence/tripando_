import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase-server";

type LeadPayload = {
  name?: string;
  email?: string;
  organization?: string;
  role?: string;
  message?: string;
  source?: string;
};

export async function GET() {
  return NextResponse.json({ ok: true, resource: "tripando-leads", storage: process.env.SUPABASE_SERVICE_ROLE_KEY ? "supabase" : "demo" });
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({})) as LeadPayload;
  if (!payload.email && !payload.organization) {
    return NextResponse.json({ ok: false, error: "email_or_organization_required" }, { status: 400 });
  }

  const lead = {
    name: payload.name ?? null,
    email: payload.email ?? null,
    organization: payload.organization ?? null,
    role: payload.role ?? null,
    message: payload.message ?? null,
    source: payload.source ?? "landing",
    status: "new"
  };

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json({ ok: true, mode: "demo", lead });
  }

  const { data, error } = await supabase.from("leads").insert(lead).select("id,status,created_at").single();
  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true, mode: "supabase", lead: data });
}
