import { defineMiddleware } from "astro/middleware";
const { ADMIN_USERNAME, ADMIN_PASSWORD } = process.env;

export const onRequest = defineMiddleware((context, next) => {
  if (
    context.url.pathname !== "/invites" &&
    context.url.pathname !== "/handles"
  ) {
    return next();
  }
  const basicAuth = context.request.headers.get("authorization");

  if (basicAuth && ADMIN_USERNAME && ADMIN_PASSWORD) {
    const authValue = basicAuth.split(" ")[1] ?? "username:password";

    const [username, pwd] = atob(authValue).split(":");

    if (username === ADMIN_USERNAME && pwd === ADMIN_PASSWORD) {
      return next();
    }
  }

  return new Response("Auth required", {
    status: 401,
    headers: {
      "WWW-authenticate": 'Basic realm="Secure Area"',
    },
  });
});
