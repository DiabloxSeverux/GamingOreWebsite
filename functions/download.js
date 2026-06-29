export async function onRequestGet(context) {
  const object = await context.env.GAMINGORE_DOWNLOADS.get("GamingOre-Setup.exe");

  if (!object) {
    return new Response("GamingOre installer is not available yet.", {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=UTF-8",
        "Cache-Control": "no-store"
      }
    });
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("ETag", object.httpEtag);
  headers.set("Content-Type", "application/vnd.microsoft.portable-executable");
  headers.set("Content-Disposition", 'attachment; filename="GamingOre-Setup.exe"');
  headers.set("Cache-Control", "public, max-age=3600");
  headers.set("X-Content-Type-Options", "nosniff");

  return new Response(object.body, { headers });
}
