export async function GET({ params, request }) {
  const response = new Response(
    JSON.stringify({
      prerender: [
        {
          urls: ["/", "/blog", "/about"],
        },
      ],
    }),
    {
      headers: {
        "Content-Type": "application/speculationrules+json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response;
}
