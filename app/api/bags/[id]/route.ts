import { cookies } from "next/headers";
import { updateBag } from "@/lib/bagsStore";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // Auth check
  const store = await cookies();
  const token = store.get("admin_token")?.value;
  if (token !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const patch = await req.json();
  const updated = updateBag(Number(id), patch);

  if (!updated) {
    return Response.json({ error: "Bag not found" }, { status: 404 });
  }

  return Response.json(updated);
}
