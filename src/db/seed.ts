import { client, db } from ".";
import { goalCompletions, goals } from "./schema";
import dayjs from "dayjs";

async function seed() {
  await db.delete(goalCompletions);
  await db.delete(goals);

  const result = await db
    .insert(goals)
    .values([
      { title: "Acordar cedo", desiredWeeklyFrequency: 5 },
      { title: "Ler um bom livro", desiredWeeklyFrequency: 3 },
      { title: "Ir para a academia fazer perna", desiredWeeklyFrequency: 1 },
    ])
    .returning();

  const startOffWeek = dayjs().startOf("week");

  await db.insert(goalCompletions).values([
    { goalId: result[0].id, createdAt: startOffWeek.toDate() },
    { goalId: result[1].id, createdAt: startOffWeek.add(1, "day").toDate() },
  ]);
}

seed().finally(() => {
  client.end();
});
