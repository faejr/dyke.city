import { getHandle } from "../../handle";
export const GET = async (request) => {
  const handle = request.url.hostname.split(".")[0];
  const data = await getHandle({ handle });
  if (data) {
    return new Response(data.bskyDid);
  }
  return new Response(null);
};
