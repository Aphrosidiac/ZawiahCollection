"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Star,
  CheckCircle2,
  EyeOff,
  Eye,
  LogOut,
  ExternalLink,
  RefreshCw,
} from "lucide-react";
import type { Bag } from "@/app/data/bags";

type Field = "featured" | "sold" | "hidden";

function Toggle({
  active,
  onChange,
  isPending,
  icon: Icon,
  label,
  activeColor,
}: {
  active: boolean;
  onChange: () => void;
  isPending: boolean;
  icon: React.ElementType;
  label: string;
  activeColor: string;
}) {
  return (
    <button
      onClick={onChange}
      disabled={isPending}
      title={label}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border transition-all duration-200 disabled:opacity-50 ${
        active
          ? `${activeColor} border-transparent`
          : "bg-transparent text-[#666] border-white/10 hover:border-white/30"
      }`}
    >
      <Icon className="w-3.5 h-3.5" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

export default function AdminDashboard({ initialBags }: { initialBags: Bag[] }) {
  const router = useRouter();
  const [bags, setBags] = useState<Bag[]>(initialBags);
  const [isPending, startTransition] = useTransition();
  const [pendingId, setPendingId] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [loggingOut, setLoggingOut] = useState(false);

  async function toggle(bag: Bag, field: Field) {
    setPendingId(bag.id);
    const patch = { [field]: !bag[field] };

    // Optimistic update
    setBags((prev) =>
      prev.map((b) => (b.id === bag.id ? { ...b, ...patch } : b))
    );

    try {
      const res = await fetch(`/api/bags/${bag.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      if (!res.ok) throw new Error();
      const updated = await res.json();
      setBags((prev) => prev.map((b) => (b.id === updated.id ? updated : b)));
    } catch {
      // Revert on error
      setBags((prev) =>
        prev.map((b) => (b.id === bag.id ? { ...b, [field]: bag[field] } : b))
      );
      alert("Failed to update. Please try again.");
    } finally {
      setPendingId(null);
    }
  }

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  const filtered = bags.filter(
    (b) =>
      b.brand.toLowerCase().includes(search.toLowerCase()) ||
      b.model.toLowerCase().includes(search.toLowerCase())
  );

  const stats = {
    total: bags.length,
    featured: bags.filter((b) => b.featured && !b.hidden).length,
    sold: bags.filter((b) => b.sold).length,
    hidden: bags.filter((b) => b.hidden).length,
    available: bags.filter((b) => !b.sold && !b.hidden).length,
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#141414] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-white font-semibold tracking-widest text-sm">ZAWIAH</p>
            <p className="text-[#666] text-[10px] tracking-[0.35em] uppercase">Admin Panel</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#888] hover:text-white transition-colors text-xs"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">View Site</span>
          </a>
          <button
            onClick={() => startTransition(() => router.refresh())}
            className="flex items-center gap-1.5 text-[#888] hover:text-white transition-colors text-xs"
            title="Refresh"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isPending ? "animate-spin" : ""}`} />
          </button>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-[#888] hover:text-white text-xs px-3 py-1.5 rounded transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {[
            { label: "Total Bags", value: stats.total, color: "text-white" },
            { label: "Available", value: stats.available, color: "text-emerald-400" },
            { label: "Featured", value: stats.featured, color: "text-[#B8935A]" },
            { label: "Sold", value: stats.sold, color: "text-sky-400" },
            { label: "Hidden", value: stats.hidden, color: "text-[#666]" },
          ].map((s) => (
            <div key={s.label} className="bg-[#1a1a1a] border border-white/10 rounded p-4">
              <p className={`text-2xl font-semibold ${s.color}`}>{s.value}</p>
              <p className="text-[#666] text-xs mt-1 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by brand or model..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#1a1a1a] border border-white/10 text-white text-sm px-4 py-2.5 rounded w-full sm:w-80 placeholder:text-[#555] focus:outline-none focus:border-[#B8935A] transition-colors"
          />
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-[#555]">
          <span className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-[#B8935A]" /> Featured
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Sold
          </span>
          <span className="flex items-center gap-1.5">
            <EyeOff className="w-3.5 h-3.5 text-[#888]" /> Hidden from site
          </span>
        </div>

        {/* Table */}
        <div className="bg-[#1a1a1a] border border-white/10 rounded overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-[#555] text-[11px] tracking-widest uppercase">
                  <th className="text-left px-4 py-3 font-medium">Bag</th>
                  <th className="text-left px-4 py-3 font-medium hidden md:table-cell">Condition</th>
                  <th className="text-left px-4 py-3 font-medium hidden sm:table-cell">Price</th>
                  <th className="text-left px-4 py-3 font-medium">Status</th>
                  <th className="text-left px-4 py-3 font-medium">Controls</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((bag, i) => {
                  const isLoading = pendingId === bag.id;
                  return (
                    <tr
                      key={bag.id}
                      className={`border-b border-white/5 transition-colors hover:bg-white/[0.02] ${
                        bag.hidden ? "opacity-40" : ""
                      } ${i === filtered.length - 1 ? "border-none" : ""}`}
                    >
                      {/* Bag info */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-12 flex-shrink-0 overflow-hidden rounded bg-[#111]">
                            <Image
                              src={bag.image}
                              alt={bag.model}
                              fill
                              className="object-cover"
                              sizes="40px"
                            />
                          </div>
                          <div>
                            <p className="text-[10px] text-[#B8935A] tracking-widest uppercase font-medium">
                              {bag.brand}
                            </p>
                            <p className="text-white font-medium leading-snug">{bag.model}</p>
                            <p className="text-[#555] text-xs">{bag.color}</p>
                          </div>
                        </div>
                      </td>

                      {/* Condition */}
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span className="text-[#888] text-xs">{bag.condition}</span>
                      </td>

                      {/* Price */}
                      <td className="px-4 py-3 hidden sm:table-cell">
                        <span className="text-white font-medium">
                          RM {bag.price.toLocaleString()}
                        </span>
                      </td>

                      {/* Status badges */}
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1.5">
                          {bag.featured && !bag.hidden && (
                            <span className="text-[10px] bg-[#B8935A]/20 text-[#B8935A] px-2 py-0.5 rounded-full">
                              Featured
                            </span>
                          )}
                          {bag.sold && (
                            <span className="text-[10px] bg-sky-400/20 text-sky-400 px-2 py-0.5 rounded-full">
                              Sold
                            </span>
                          )}
                          {bag.hidden && (
                            <span className="text-[10px] bg-white/10 text-[#666] px-2 py-0.5 rounded-full">
                              Hidden
                            </span>
                          )}
                          {!bag.sold && !bag.hidden && !bag.featured && (
                            <span className="text-[10px] bg-emerald-400/20 text-emerald-400 px-2 py-0.5 rounded-full">
                              Listed
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Toggle controls */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Toggle
                            active={!!bag.featured}
                            onChange={() => toggle(bag, "featured")}
                            isPending={isLoading}
                            icon={Star}
                            label="Featured"
                            activeColor="bg-[#B8935A]/20 text-[#B8935A] border-[#B8935A]/30"
                          />
                          <Toggle
                            active={!!bag.sold}
                            onChange={() => toggle(bag, "sold")}
                            isPending={isLoading}
                            icon={CheckCircle2}
                            label="Sold"
                            activeColor="bg-sky-400/20 text-sky-400 border-sky-400/30"
                          />
                          <Toggle
                            active={!!bag.hidden}
                            onChange={() => toggle(bag, "hidden")}
                            isPending={isLoading}
                            icon={bag.hidden ? Eye : EyeOff}
                            label={bag.hidden ? "Show" : "Hide"}
                            activeColor="bg-white/10 text-[#888] border-white/20"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {filtered.length === 0 && (
              <div className="text-center py-12 text-[#555] text-sm">
                No bags found.
              </div>
            )}
          </div>
        </div>

        <p className="text-[#333] text-xs mt-4 text-center">
          Changes are saved instantly to the data file.
        </p>
      </div>
    </div>
  );
}
