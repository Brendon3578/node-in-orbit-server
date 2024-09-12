import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { createGoalRoute } from "./routes/create-goal";
import { createCompletionRoute } from "./routes/create-completion";
import { getCompletionGoalsRoute } from "./routes/get-pending-goals";
import { getWeekSummaryRoute } from "./routes/get-week-summary";

const app = fastify().withTypeProvider<ZodTypeProvider>();
const port = 3333;

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

// get routes
app.register(getCompletionGoalsRoute);
app.register(getWeekSummaryRoute);

// post routes
app.register(createCompletionRoute);
app.register(createGoalRoute);

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
