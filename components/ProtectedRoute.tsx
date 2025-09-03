"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error || !data.session) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return <>{children}</>;
}
