import { readBags } from "@/lib/bagsStore";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

export default function AdminPage() {
  const bags = readBags();
  return <AdminDashboard initialBags={bags} />;
}
