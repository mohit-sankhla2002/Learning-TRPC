import { initTRPC } from '@trpc/server';
type ctx = {
  username: string;
};
const t = initTRPC.context<ctx>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

