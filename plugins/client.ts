import { createTRPCNuxtClient, httpBatchLink } from "trpc-nuxt/client";
import type { AppRouter } from "~~/server/trpc/routers";
import superjson from "superjson";

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return ""; // browser should use relative url
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  } else if (process.env.GITPOD_WORKSPACE_UR) {
    return `https://${process.env.GITPOD_WORKSPACE_UR}`
  }
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default defineNuxtPlugin(() => {
  const headers = useRequestHeaders();

  /**
   * createTRPCNuxtClient adds a `useQuery` composable
   * built on top of `useAsyncData`.
   */
  const client = createTRPCNuxtClient<AppRouter>({
    transformer: superjson,
    links: [
      httpBatchLink({
        url: `${getBaseUrl()}/api/trpc`,
        headers() {
          return headers;
        },
      }),
    ],
  });

  return {
    provide: {
      client,
    },
  };
});
