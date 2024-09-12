import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getWeekPendingGoals } from "../../functions/get-week-pending-goals";
import { createGoalCompletion } from "../../functions/create-goal-completion";
import z from "zod";

export const createCompletionRoute: FastifyPluginAsyncZod = async (app) => {
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
