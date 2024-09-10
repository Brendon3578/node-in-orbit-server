import fastify from "fastify";
import { createGoal } from "../functions/create-goal";
import z from "zod";

const app = fastify();

const port = 3333;

app.post("/goals", async (req, res) => {
  const createGoalSchema = z.object({
    title: z.string(),
    desiredWeeklyFrequency: z.number().int().min(1).max(7),
  });
  const body = createGoalSchema.parse(req.body);

  await createGoal({
    title: body.title,
    desiredWeeklyFrequency: body.desiredWeeklyFrequency,
  });
});

app
  .listen({
    port: port,
  })
  .then(() => {
    console.log(`HTTP server running on http://localhost:${port}`);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});
