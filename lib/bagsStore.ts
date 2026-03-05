import fs from "fs";
import path from "path";
import type { Bag } from "@/app/data/bags";

const DATA_FILE = path.join(process.cwd(), "data", "bags.json");

export function readBags(): Bag[] {
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw) as Bag[];
}

export function writeBags(bags: Bag[]): void {
  fs.writeFileSync(DATA_FILE, JSON.stringify(bags, null, 2), "utf-8");
}

export function updateBag(id: number, patch: Partial<Bag>): Bag | null {
  const bags = readBags();
  const idx = bags.findIndex((b) => b.id === id);
  if (idx === -1) return null;
  bags[idx] = { ...bags[idx], ...patch };
  writeBags(bags);
  return bags[idx];
}
