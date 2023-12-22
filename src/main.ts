import Fastify from "fastify";
import { userRoutes } from "./modules/user/user.routes";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { dbClient } from "./lib/db.client";

const port = Number(process.env.Port) || 3002;
const server = Fastify({
  logger: true,
});

server.register(userRoutes, { prefix: "api/user" });

(async () => {
  try {
    await server.listen({ port, host: "0.0.0.0" });
    await migrate(dbClient, {
      migrationsFolder: "./migrations",
    });
    server.log.error(`server running on http://localhost:${port}`);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
})();

["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal, async () => {
    await server.close();

    process.exit(0);
  });
});
