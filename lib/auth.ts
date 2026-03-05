import { cookies } from "next/headers";

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  const token = store.get("admin_token")?.value;
  return token === process.env.ADMIN_PASSWORD;
}
