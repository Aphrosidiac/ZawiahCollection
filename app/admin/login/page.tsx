"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        setError("Incorrect password.");
      }
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <p className="text-white text-2xl font-semibold tracking-widest mb-1">ZAWIAH</p>
          <p className="text-[#888] text-xs tracking-[0.4em] uppercase">Admin Panel</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#1a1a1a] border border-white/10 p-8 rounded-sm">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-4 h-4 text-[#B8935A]" />
            <h1 className="text-white text-sm font-medium tracking-wide">Sign In</h1>
          </div>

          <div className="relative mb-4">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#111] border border-white/10 text-white text-sm px-4 py-3 pr-12 rounded-sm placeholder:text-[#555] focus:outline-none focus:border-[#B8935A] transition-colors"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555] hover:text-white transition-colors"
            >
              {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {error && (
            <p className="text-red-400 text-xs mb-4">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-[#B8935A] text-white text-xs tracking-widest uppercase font-semibold py-3 hover:bg-[#9A7A47] transition-colors disabled:opacity-40 disabled:cursor-not-allowed rounded-sm"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-[#444] text-xs mt-6">
          <a href="/" className="hover:text-[#888] transition-colors">← Back to website</a>
        </p>
      </div>
    </div>
  );
}
