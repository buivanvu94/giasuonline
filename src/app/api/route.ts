export const dynamic = "force-static";

export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users`, {
    headers: {
      "Content-Type": "application/json"
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
