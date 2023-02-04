import { createNuxtApiHandler } from "trpc-nuxt";
import { appRouter } from "~~/server/trpc/routers";
import { createContext } from "~~/server/trpc/context";

// export API handler
export default createNuxtApiHandler({
  router: appRouter,
  createContext,
  onError:
    process.env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
});
