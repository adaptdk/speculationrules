export async function onRequest(context, next) {
  if (context.request.headers.get("Sec-Purpose") === "prefetch;prerender") {
    console.log("Prerendering", context.request.url);
    context.locals.prerender = true;
  }
  const response = await next();
  if (response.headers.get("Content-Type") !== "text/html") {
    return response;
  }

  const newResponse = new Response(response.body, response);

  newResponse.headers.set("Speculation-Rules", '"/prerender.json"');
  return newResponse;
}
