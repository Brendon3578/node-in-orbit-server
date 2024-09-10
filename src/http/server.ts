import fastify from "fastify";

const app = fastify();

const port = 3333;

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
