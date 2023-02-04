import { createTRPCRouter } from "../trpc";
import { exampleRouter } from "./example";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
});

//export type definition of API
export type AppRouter = typeof appRouter;
