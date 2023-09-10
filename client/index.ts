import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { appRouter } from "../server";

const trpc = createTRPCProxyClient<appRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

async function main() {
    const response = await trpc.todoCreate.mutate({
        title: '', 
        description: '', 
        done: false
    });

    console.log(response);
}

main();