import { getHandles } from "../../handle";
export const GET = async (request) => {
  const handles = await getHandles();
  if (handles) {
    return new Response(
      JSON.stringify(handles.map((handle) => handle.bskyDid))
    );
  }
  return new Response(null);
};
