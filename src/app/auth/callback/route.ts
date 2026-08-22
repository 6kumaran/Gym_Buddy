import { createSupabaseServerClient } from "../../../../lib/supabaseServer";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const code = url.searchParams.get("code");
  const origin = url.origin;

  console.log("CALLBACK ORIGIN:", origin);
console.log("CALLBACK FULL URL:", request.url);

  console.log("========== AUTH CALLBACK ==========");
  console.log("Callback URL:", request.url);
  console.log("Callback origin:", origin);
  console.log("OAuth code exists:", !!code);

  if (code) {
    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    console.log(
      "Exchange result:",
      error ? error.message : "SUCCESS"
    );

    if (!error) {
      console.log("Redirecting to:", `${origin}/`);
      return NextResponse.redirect(`${origin}/`);
    }
  }

  console.log("OAuth callback failed");
  return NextResponse.redirect(`${origin}/login?error=auth`);
}