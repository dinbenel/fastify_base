import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { TReq } from "../../types/http.type";
import { createUserHandler } from "./user.controller";
import { registerSchemaJSON } from "./user.schema";

export const userRoutes = async (fastify: FastifyInstance) => {
  fastify.post(
    "/",
    {
      schema: registerSchemaJSON,
    },
    createUserHandler
  );
};
