import { readBags } from "@/lib/bagsStore";

export async function GET() {
  const bags = readBags();
  return Response.json(bags);
}
