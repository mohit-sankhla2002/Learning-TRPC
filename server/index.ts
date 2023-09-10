import { publicProcedure, router } from './trpc'
import { z } from 'zod'
import { createHTTPServer } from '@trpc/server/adapters/standalone' 

const appRouter = router({  
    todoCreate: publicProcedure.input(z.object({
        title: z.string(), 
        description: z.string(),
        done: z.boolean()
    })).mutation(async (opts) => {
        const title = opts.input.title;
        const description = opts.input.description;
        const done = opts.input.done;

        // DO DB STUFF HERE 

        console.log('A fucker just passed by here');

        return {
            id: "1"
        }
    })
});

const server = createHTTPServer({
    router: appRouter,
    createContext(opts) {
        console.log(opts.req);
        return {
            username: 'abc'
        }
    }
});

server.listen(3000);


export type appRouter = typeof appRouter;