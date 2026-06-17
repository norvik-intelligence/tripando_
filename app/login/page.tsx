"use client";

import Link from "next/link";
import { useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import { HeartHandshake } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Demo-Modus: Supabase ENV-Keys fehlen noch. Die App bleibt über /app sichtbar.");
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage(error.message);
    else window.location.href = "/app";
  }

  return <main className="auth-page"><form onSubmit={login} className="auth-card"><Link href="/" className="auth-brand"><span><HeartHandshake size={21}/></span><strong>Tripando</strong></Link><h1>Anmelden</h1><p>Für Organisationen, Standorte und Netzwerkadministratoren.</p><label>E-Mail<input value={email} onChange={(event)=>setEmail(event.target.value)} type="email" required placeholder="name@organisation.de"/></label><label>Passwort<input value={password} onChange={(event)=>setPassword(event.target.value)} type="password" required placeholder="••••••••"/></label><button className="primary-button">Einloggen</button>{message&&<p className="auth-message">{message}</p>}<Link href="/app" className="secondary-button full">Demo ohne Login öffnen</Link></form></main>;
}
