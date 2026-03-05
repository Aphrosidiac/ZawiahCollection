export async function POST(req: Request) {
  const { password } = await req.json();

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: "Invalid password" }, { status: 401 });
  }

  const res = Response.json({ ok: true });
  res.headers.set(
    "Set-Cookie",
    `admin_token=${password}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`
  );
  return res;
}
