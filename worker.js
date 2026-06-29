export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/download") {
      const installer = await env.DOWNLOADS.get("GamingOre-Setup.exe");

      if (!installer) {
        return new Response(
          "The GamingOre installer is not available yet. Please try again shortly.",
          {
            status: 404,
            headers: { "Content-Type": "text/plain; charset=utf-8" }
          }
        );
      }

      const headers = new Headers();
      installer.writeHttpMetadata(headers);
      headers.set("Content-Type", "application/octet-stream");
      headers.set(
        "Content-Disposition",
        'attachment; filename="GamingOre-Setup.exe"'
      );
      headers.set("Cache-Control", "public, max-age=3600");
      headers.set("X-Content-Type-Options", "nosniff");

      return new Response(installer.body, { headers });
    }

    return env.ASSETS.fetch(request);
  }
};
