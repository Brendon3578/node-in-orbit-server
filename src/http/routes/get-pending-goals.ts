import { z } from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { createGoalCompletion } from "../../functions/create-goal-completion";

export const getCompletionGoalsRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/completions",
    {
      schema: {
        body: z.object({
          goalId: z.string(),
        }),
      },
    },

    async (req) => {
      const { goalId } = req.body;

      // short syntax
      const result = await createGoalCompletion({
        goalId,
      });

      return result;
    }
  );
};
